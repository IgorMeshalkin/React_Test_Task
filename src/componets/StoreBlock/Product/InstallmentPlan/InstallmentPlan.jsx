import React from 'react';
import styles from './InstallmentPlan.module.css'
import {INSTALLMENT_PLAN_TITLE} from "../../../../properties/storePageProperties";

const InstallmentPlan = ({product}) => {
    return (
        <div className={styles.main}>
            <span className={styles.text}>{INSTALLMENT_PLAN_TITLE + product.installmentPlan}</span>
            <div className={styles.glare}/>
        </div>
    );
};

export default InstallmentPlan;