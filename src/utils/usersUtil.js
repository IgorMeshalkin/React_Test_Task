import React from "react";
import {Button} from "antd";

export const prepareForTable = (usersByAPI) => {
    const result = [];
    usersByAPI.forEach(user => {
        result.push({...user, key: user.id})
    })
    return result
}

export const getUsersTableColumns = (deleteButtonAction) => {
    return [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            render: (text) => <span>{text}</span>,
        },
        {
            title: 'Роль',
            dataIndex: 'role',
            key: 'role',
            render: (text) => <span>{text}</span>,
        },
        {
            title: 'Имя',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <span>{text}</span>,
        },
        {
            title: 'Дата создания',
            dataIndex: 'ctime',
            key: 'ctime',
            render: (text) => <span>{dateTimeFormat(text)}</span>,
        },
        {
            title: 'Действия',
            key: 'action',
            render: (record) => (
                <Button
                    type="primary"
                    style={{backgroundColor: '#f43333'}}
                    onClick={() => deleteButtonAction(record.id)}
                >
                    Удалить
                </Button>
            ),
        },
    ];
}

const dateTimeFormat = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000);
    return addZero(date.getDate())
        + '.' + addZero((date.getMonth() + 1))
        + '.' + date.getFullYear()
        + ' ' + addZero(date.getHours())
        + ':' + addZero(date.getMinutes());
}

const addZero = (num) => {
    if (num < 10) {
        return '0' + num;
    } else {
        return num;
    }
}