export const getNavbarButtons = () => {
    return [
        {
            key: '1',
            label: `Главная страница`,
            path: `/`,
        },
        {
            key: '2',
            label: `Авторизация`,
            path: `/login`,
        },
        {
            key: '3',
            label: `Магазин`,
            path: `/store`,
        },
    ];
}