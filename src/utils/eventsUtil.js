import {dateTimeFormat} from "./dateTimeStringUtil";

//добавляет объекту event свойство key (= event), необходимое для корректной работы таблицы Ant Design
export const prepareEventForTable = (event) => {
    return {...event, key: event.event}
}

//возвращает структуру таблицы событий в виде массива объектов.
export const getEventsTableColumns = () => {
    return [
        {
            title: 'Дата',
            dataIndex: 'ctime',
            key: 'date',
            render: (text) => <span>{dateTimeFormat(text)}</span>,
        },
        {
            title: 'Событие',
            dataIndex: 'event',
            key: 'event',
            render: (text) => <span>{text}</span>,
        },
    ];
}