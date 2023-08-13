import React from 'react';
import styles from './Product.module.css'
import {ALT_IMG_MESSAGE, MIR_TITLE, SBER_TITLE, SBP_TITLE} from "../../../properties/storePageProperties";
import {getPriceString, getPriceWithDiscountString, getRatingStars} from "../../../utils/storeUtil";
import mir from '../../../images/paymentSystems/mir.png'
import sber from '../../../images/paymentSystems/sber.png'
import sbp from '../../../images/paymentSystems/sbp.png'
import ProductImage from "./ProductImage/ProductImage";
import InstallmentPlan from "./InstallmentPlan/InstallmentPlan";
import ButtonsBlock from "./ButtonsBlock/ButtonsBlock";

const Product = ({product, quickViewAction}) => {
    return (
        <div className={styles.main}>
            <ProductImage
                product={product}
                quickViewAction={quickViewAction}
            />
            <div className={styles.infoContainer}>
                <div className={styles.regularLineContainer}>
                    <span
                        className={styles.priceWithDiscount}>{getPriceWithDiscountString(product.price, product.discount)}</span>
                    <span className={styles.priceWithoutDiscount}>{getPriceString(product.price)}</span>
                </div>
                <div className={styles.regularLineContainer}>
                    <span className={styles.specialPrice}>{getPriceString(product.specialPrice)}</span>
                    <img src={mir} className={styles.paymentSystemImg} alt={ALT_IMG_MESSAGE} title={MIR_TITLE}/>
                    <img src={sber} className={styles.paymentSystemImg} alt={ALT_IMG_MESSAGE} title={SBER_TITLE}/>
                    <img src={sbp} className={styles.paymentSystemImg} alt={ALT_IMG_MESSAGE} title={SBP_TITLE}/>
                </div>
                <div className={styles.descriptionContainer}>
                    {product.description}
                </div>
                <div className={styles.regularLineContainer}>
                    <span className={styles.starsLine}>{getRatingStars(product.rating)}</span>
                    <span className={styles.ratingNumber}>{product.rating}</span>
                </div>
                {
                    (product.installmentPlan && product.installmentPlan !== '') &&
                    <div className={[styles.regularLineContainer, styles.big].join(' ')}>
                        <InstallmentPlan
                            product={product}
                        />
                    </div>
                }
                <div className={[styles.regularLineContainer, styles.big].join(' ')}>
                    <ButtonsBlock/>
                </div>
            </div>
        </div>
    );
};

export default Product;