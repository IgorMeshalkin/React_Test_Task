import React, {useState} from 'react';
import styles from './StoreBlock.module.css'
import {ALT_IMG_MESSAGE, STORE_TITLE} from "../../properties/storePageProperties";
import Product from "./Product/Product";
import {getProducts} from "../../utils/storeUtil";
import {Modal} from "antd";

const StoreBlock = () => {
    //список товаров для магазина
    const [products] = useState(getProducts())
    //открыто ли модальное окно
    const [isModalOpen, setIsModalOpen] = useState(false);
    //содержит изображение для модального окна
    const [modalImg, setModalImg] = useState()

    //меняет изображение для модального окна на переданное и открывает модальное окно
    const quickViewAction = (img) => {
        setModalImg(img)
        setIsModalOpen(true)
    }

    //закрывает модальное окно
    const handleCancel = () => {
        setIsModalOpen(false)
    };

    return (
        <div className={styles.main}>
            <span className="title">{STORE_TITLE}</span>
            <div className={styles.itemsContainer}>
                {
                    products.map(product =>
                        <Product
                            key={product.id}
                            product={product}
                            quickViewAction={quickViewAction}
                        />
                    )
                }
            </div>
            <Modal open={isModalOpen}
                   centered={true}
                   footer={null}
                   onCancel={handleCancel}
                   bodyStyle={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            >
                <img src={modalImg} alt={ALT_IMG_MESSAGE}/>
            </Modal>
        </div>
    );
};

export default StoreBlock;