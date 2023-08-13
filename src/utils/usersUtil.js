import React from "react";
import {Button} from "antd";
import {dateTimeFormat} from "./dateTimeStringUtil";
import {DELETE_USER_BUTTON_TEXT} from "../properties/mainPageProperties";

//возвращает список юзеров со свойством key (= id), необходимым для корректной работы таблицы Ant Design.
export const prepareUsersArrayForTable = (usersByAPI) => {
    const result = [];
    usersByAPI.forEach(user => {
        result.push({...user, key: user.id})
    })
    return result
}

//возвращает структуру таблицы юзеров в виде массива объектов.
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
                    onClick={() => deleteButtonAction(record.id)}
                    danger>
                    {DELETE_USER_BUTTON_TEXT}
                </Button>
            ),
        },
    ];
}