import React, {useState} from 'react';
import styles from './Navbar.module.css'
import {Tabs} from "antd";
import {getNavbarButtons} from "../../utils/navbarUtil";
import {useNavigate} from "react-router-dom";

const Navbar = () => {
    //массив кнопок для навигационной панели
    const [navbarButtons] = useState(getNavbarButtons())
    //переменная для переключения между страницами
    const navigate = useNavigate();

    //осуществляет навигацию по нажатию на кнопку
    const onChange = (key) => {
        const pathForNavigate = navbarButtons.filter(item => item.key === key)[0].path
        navigate(pathForNavigate)
    };

    return (
        <div className={styles.main}>
            <Tabs defaultActiveKey="1" items={navbarButtons} onChange={onChange} />
        </div>
    );
};

export default Navbar;