import React, {useEffect} from 'react';
import styles from './EventsTable.module.css'
import {Table} from "antd";
import {getEventsTableColumns, prepareEventForTable} from "../../../utils/eventsUtil";
import {useDispatch, useSelector} from "react-redux";
import {EVENTS_TITLE} from "../../../properties/mainPageProperties";
import {addToEventsList} from "../../../store/slices/eventsSlice";
import {WEB_SOCKET_ADDRESS} from "../../../properties/connectingProperties";

const EventsTable = () => {
    // //массив событий
    const events = useSelector(state => state.eventsList.eventsList)
    //состояние авторизации
    const authorization = useSelector(state => state.authorization.authorizationState)
    //диспатч для вызова редюсера добавления события в список
    const dispatch = useDispatch();
    //редюсер добавления события в список
    const addEventToList = (route) => dispatch(addToEventsList(route));

    //если пользователь авторизован подключается к web socket и слушает, при появлении событий добавляет их в events
    useEffect(() => {
        if (authorization.isAuthorization) {
            const ws = new WebSocket(WEB_SOCKET_ADDRESS);
            ws.onmessage = event => {
                addEventToList(prepareEventForTable(JSON.parse(event.data)))
            };
            return () => {
                if (ws.readyState === 1) {
                    ws.close();
                }
            };
        }
    }, [authorization])

    return (
        <div className={styles.main}>
            <span className="title">{EVENTS_TITLE}</span>
            <div className={styles.eventsContainer}>
                <Table
                    columns={getEventsTableColumns()}
                    dataSource={events}
                    pagination={false}
                />
            </div>
        </div>
    );
};

export default EventsTable;