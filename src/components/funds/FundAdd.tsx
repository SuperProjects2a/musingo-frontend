import React from 'react'
import { Image } from 'react-bootstrap'

import option1 from '../../images/opt1.png';
import option2 from '../../images/opt2.png';
import option3 from '../../images/opt3.png';
import option4 from '../../images/opt4.png';
import option5 from '../../images/opt5.png';

import paypalLogo from '../../images/paypal-logo.png';
import cardLogo from '../../images/card-logo.png';
import przelewyLogo from '../../images/przelewy24-logo.png';

type FundOption = {
    image: string,
    amount: number
};

const FundAddOption = ({ image, amount }: FundOption) => {
    return (
        <div className='card p-4 m-3 shadow'>
            <h3 style={{ fontWeight: "bold" }}>${amount}</h3>
            <Image src={image} fluid style={{ width: 200, height: 200 }}></Image>
            <button className='btn btn-success'>Wybierz</button>
        </div>
    )
}

export const FundAdd = () => {
    return (
        <div>
            <h2 className='py-4'>Dodaj fundusze do swojego portfela:</h2>
            <div className='d-flex flex-wrap justify-content-center'>
                <FundAddOption image={option1} amount={20}></FundAddOption>
                <FundAddOption image={option2} amount={50}></FundAddOption>
                <FundAddOption image={option3} amount={100}></FundAddOption>
                <FundAddOption image={option4} amount={200}></FundAddOption>
                <FundAddOption image={option5} amount={500}></FundAddOption>
            </div>
            <h4 className='pt-4 pb-3'>Metody płatności:</h4>
            <div className='d-flex flex-wrap justify-content-center'>
                <Image height={100} src={paypalLogo}></Image>
                <Image height={100} src={cardLogo}></Image>
                <Image height={100} src={przelewyLogo}></Image>
            </div>
        </div>

    )
}
