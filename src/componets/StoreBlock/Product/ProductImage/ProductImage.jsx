import React from 'react';
import {ALT_IMG_MESSAGE, QUICK_VIEW_BUTTON_TEXT} from "../../../../properties/storePageProperties";
import styles from './ProductImage.module.css'

const ProductImage = ({product, quickViewAction}) => {
    //вызывает открытие модального окна и передаёт в него изображение товара
    const onQuickViewClick = () => {
        quickViewAction(product.photo)
    }

    return (
        <div  className={styles.main}>
            <img src={product.photo} alt={ALT_IMG_MESSAGE} className={styles.productImage}/>
            <div className={styles.quickViewContainer}>
                <div className={styles.quickViewButton} onClick={onQuickViewClick}>
                    {QUICK_VIEW_BUTTON_TEXT}
                </div>
            </div>
            <div className={styles.discount}>
                {product.discount + '%'}
            </div>
        </div>
    );
};

export default ProductImage;