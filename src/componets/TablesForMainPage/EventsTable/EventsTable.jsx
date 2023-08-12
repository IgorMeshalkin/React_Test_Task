import React from 'react';
import styles from './EventsTable.module.css'
import {Table} from "antd";
import {getEventsTableColumns} from "../../../utils/eventsUtil";
import {useSelector} from "react-redux";
import {EVENTS_TITLE} from "../../../properties/mainPageProperties";

const EventsTable = () => {
    //массив событий
    const events = useSelector(state => state.eventsList.eventsList)

    return (
        <div className={styles.main}>
            <span className={styles.title}>{EVENTS_TITLE}</span>
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