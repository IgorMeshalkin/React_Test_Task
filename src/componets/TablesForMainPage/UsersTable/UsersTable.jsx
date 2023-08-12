import React, {useEffect, useState} from 'react';
import styles from './UsersTable.module.css'
import UsersAPI from "../../../api/UsersAPI";
import {useAPI} from "../../../hooks/useAPI";
import {Pagination, Table} from "antd";
import Loader from "../../Loader/Loader";
import {getUsersTableColumns, prepareUsersArrayForTable} from "../../../utils/usersUtil";
import {USERS_LIST_TITLE} from "../../../properties/mainPageProperties";

const UsersTable = () => {
    //массив юзеров для отображения в таблице
    const [users, setUsers] = useState([])
    //лимит количества отображаемых в таблице юзеров
    const [limit] = useState(5)
    //смещение при вызове API с пагинацией
    const [offset, setOffset] = useState(0)
    //общее количество страниц юзеров в БД по данным API (при текущем лимите)
    const [totalPaginationPages, setTotalPaginationPages] = useState(0)

    //возвращает функцию, состояние загрузки и текст ошибки при наличии таковой.
    const [fetchUsers, isUsersLoading, usersLoadingError] = useAPI(async () => {
        const response = await UsersAPI.get(limit, offset)
        setUsers(prepareUsersArrayForTable(response.data.items))
        setTotalPaginationPages(Math.ceil(response.data.total / limit) * 10)
    })

    //вызывает API при каждом изменении offset
    useEffect(() => {
        fetchUsers()
    }, [offset])

    //вызывает alert с сообщением об ошибке, если она появляется.
    useEffect(() => {
        if (usersLoadingError !== '') {
            alert('При загрузке данных пользователей произошла ошибка: ' + usersLoadingError)
        }
    }, [usersLoadingError])

    //при нажатии кнопок на строке пагинации меняет offset что запускает вызов API с новыми параметрами
    const onPaginationChange = (page) => {
        let newOffset = 0;
        if (page > 1) {
            newOffset = (page - 1) * limit
        }
        setOffset(newOffset)
    }

    //удаляет из списка юзера с указанным id, только на фронтенде без обращения к API
    const onDeleteButtonClick = (id) => {
        const newUsersList = [...users.filter(user => user.id !== id)]
        setUsers(newUsersList)
    }

    return (
        <div className={styles.main}>
            <span className={styles.title}>{USERS_LIST_TITLE}</span>
            <Table
                columns={getUsersTableColumns(onDeleteButtonClick)}
                dataSource={users}
                pagination={false}
            />
            {
                totalPaginationPages > 0 &&
                <Pagination defaultCurrent={1} total={totalPaginationPages} onChange={onPaginationChange}/>
            }
            {
                isUsersLoading &&
                <div className={styles.loaderContainer}>
                    <Loader
                        isIncluded={true}
                        isActive={isUsersLoading}
                    />
                </div>
            }
        </div>
    );
};

export default UsersTable;