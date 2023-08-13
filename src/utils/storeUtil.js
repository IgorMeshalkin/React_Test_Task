import productImg1 from '../images/products/1.jpg'
import productImg2 from '../images/products/2.jpg'
import productImg3 from '../images/products/3.jpg'
import productImg4 from '../images/products/4.jpg'
import productImg5 from '../images/products/5.jpg'
import productImg6 from '../images/products/6.jpg'
import productImg7 from '../images/products/7.jpg'
import productImg8 from '../images/products/8.jpg'
import productImg9 from '../images/products/9.jpg'
import productImg10 from '../images/products/10.jpg'
import {EMPTY_STAR, FULL_STAR, RUBLE_SYMBOL} from "../properties/spetialChars";

//возвращает массив товаров для магазина
export const getProducts = () => {
    return [
        {
            id: 1,
            name: 'Apple iPhone 14 Pro Max',
            description: '6.7" Смартфон Apple iPhone 14 Pro Max 1024 ГБ золотистый [ядер - 6, 6 ГБ, 1 SIM, OLED, 2796x1290, камера 48+12+12 Мп, NFC, 5G, GPS]',
            price: 199999,
            discount: 14,
            specialPrice: 164999,
            rating: 87,
            installmentPlan: '0-0-6',
            photo: productImg1
        },
        {
            id: 2,
            name: 'Samsung Galaxy S23 Ultra',
            description: '6.8" Смартфон Samsung Galaxy S23 Ultra 1024 ГБ тёмно-серый [ядер - 8x(3.2 ГГц), 12 ГБ, 2 SIM, Dynamic AMOLED 2X, 3088x1440, камера 200+12+10+10 Мп, NFC, 5G, GPS, 5000 мА*ч]',
            price: 159999,
            discount: 12,
            specialPrice: 134999,
            rating: 91,
            installmentPlan: '0-0-12',
            photo: productImg2
        },
        {
            id: 3,
            name: 'HUAWEI Mate X3',
            description: '7.85" Смартфон HUAWEI Mate X3 512 ГБ зеленый [ядер - 8x(3.2 ГГц), 12 ГБ, 2 SIM, OLED, 2496х2224, камера 50+13+12 Мп, NFC, 4G, GPS, 4800 мА*ч]',
            price: 159999,
            discount: 13,
            specialPrice: 132999,
            rating: 79,
            installmentPlan: '0-0-6',
            photo: productImg3
        },
        {
            id: 4,
            name: 'Xiaomi 13 Ultra',
            description: '6.73" Смартфон Xiaomi 13 Ultra 512 ГБ зеленый [ядер - 8x(3.2 ГГц), 12 ГБ, 2 SIM, AMOLED, 3200x1440, камера 50+50+50+50 Мп, NFC, 5G, GPS, 5000 мА*ч]',
            price: 136999,
            discount: 9,
            specialPrice: 119999,
            rating: 82,
            installmentPlan: '',
            photo: productImg4
        },
        {
            id: 5,
            name: 'Samsung Galaxy Z Fold3',
            description: '7.6" Смартфон Samsung Galaxy Z Fold3 256 ГБ черный [ядер - 8x(1.8 ГГц, 2.4 ГГц, 2.84 ГГц), 12 ГБ, 2 SIM, Dynamic AMOLED 2X, 2208x1768, камера 12+12+12 Мп, NFC, 5G, GPS, 4400 мА*ч]',
            price: 120499,
            discount: 10,
            specialPrice: 104999,
            rating: 58,
            installmentPlan: '0-0-12',
            photo: productImg5
        },
        {
            id: 6,
            name: 'Google Pixel 7 Pro',
            description: '6.7" Смартфон Google Pixel 7 Pro 128 ГБ черный [ядер - 8x(2.9 ГГц), 8 ГБ, 1 SIM, OLED, 3120x1440, камера 50+48+12 Мп, NFC, 5G, GPS, 5000 мА*ч]',
            price: 73499,
            discount: 12,
            specialPrice: 58999,
            rating: 74,
            installmentPlan: '0-0-12',
            photo: productImg6
        },
        {
            id: 7,
            name: 'HUAWEI P60 Pro',
            description: '6.67" Смартфон HUAWEI P60 Pro 256 ГБ белый [ядер - 8x(3.2 ГГц), 8 ГБ, 2 SIM, OLED, 2700x1220, камера 48+48+13 Мп, NFC, 4G, GPS, 4815 мА*ч]',
            price: 71499,
            discount: 11,
            specialPrice: 54999,
            rating: 69,
            // installmentPlan: '0-0-12',
            photo: productImg7
        },
        {
            id: 8,
            name: 'Motorola Edge 30 Pro',
            description: '6.7" Смартфон Motorola Edge 30 Pro 256 ГБ синий [ядер - 8x(3 ГГц), 12 ГБ, 2 SIM, OLED, 2400x1080, камера 50+50+2 Мп, NFC, 5G, GPS, 4800 мА*ч]',
            price: 69999,
            discount: 14,
            specialPrice: 58999,
            rating: 57,
            installmentPlan: '0-0-6',
            photo: productImg8
        },
        {
            id: 9,
            name: 'Смартфон OnePlus 11',
            description: '6.7" Смартфон OnePlus 11 128 ГБ черный [ядер - 8x(3.2 ГГц), 8 ГБ, 2 SIM, AMOLED, 3216x1440, камера 50+48+32 Мп, NFC, 5G, GPS, 5000 мА*ч]',
            price: 69999,
            discount: 12,
            specialPrice: 59999,
            rating: 53,
            installmentPlan: '0-0-12',
            photo: productImg9
        },
        {
            id: 10,
            name: 'POCO F4 GT',
            description: '6.67" Смартфон POCO F4 GT 128 ГБ черный [ядер - 8x(1.8 ГГц, 2.5 ГГц, 3 ГГц), 8 ГБ, 2 SIM, AMOLED, 2400x1080, камера 64+8+2 Мп, NFC, 5G, GPS, 4700 мА*ч]',
            price: 65999,
            discount: 8,
            specialPrice: 55999,
            rating: 48,
            installmentPlan: '0-0-6',
            photo: productImg10
        },
    ]
}

//Возвращает цену с пробелами через каждые три знака и символом рубля в конце
export const getPriceString = (price) => {
    const reverseArray = String(price).split('').reverse()
    const resultArray = [];
    for (let i = 0; i < reverseArray.length; i++) {
        if (i > 0 && i % 3 === 0) {
            resultArray.push(' ')
            resultArray.push(reverseArray[i])
        } else {
            resultArray.push(reverseArray[i])
        }
    }
    return resultArray.reverse().join('') + ' ' + RUBLE_SYMBOL;
}

//Возвращает цену с учётом скидки, отформатированную методом getPriceString()
export const getPriceWithDiscountString = (price, discount) => {
    const sum = Math.round(price / 100 * (100 - discount))
    return getPriceString(sum)
}

//Возвращает строку содержащую пять звёзд, некоторые из которых наполнены, а некоторые нет.
//Каждые 20% рейтинга заполняют одну звезду.
export const getRatingStars = (rating) => {
    const fullStarsNumber = Math.ceil(rating / 20);
    let result = '';
    for (let i = 1; i <= 5; i++) {
        if (i > fullStarsNumber) {
            result += EMPTY_STAR;
        } else {
            result += FULL_STAR;
        }
    }
    return result;
}