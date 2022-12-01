import React, {memo} from 'react';

import {IProduct} from "../../interfaces/IProduct";
import {IconButton} from "../IconButton/IconButton";
import {firstLetterUpper} from "../../helpers/helpers";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../hooks/hooks";
import {addToCart} from "../../redux";

interface IProductProps  {product: IProduct}

const Product = memo(({product}: IProductProps) : JSX.Element => {

    const {id,category,price,title,image} = product

    const dispatch = useAppDispatch();
    const addBag = ()=> dispatch(addToCart(product))

    const navigate = useNavigate();
    const navigateTo = () => navigate(`/product/${id}`);

    return (
        <div>
            <div className='border-2 border-gray-300 h-[300px] flex items-center justify-center group
            overflow-hidden transition relative p-2'>
                <img className='max-h-[150px] max-w-[170px] group-hover:scale-110 transition duration-300' src={image}
                     alt={title}/>
                <div
                    className='absolute top-3 -right-11 group-hover:right-4 opacity-0 group-hover:opacity-100
                    transition-all duration-300 text-white flex items-center justify-center flex-col space-y-1 '>
                    <IconButton onClick={addBag} icon={'plus'} size={'large'} bgColor={'red'}/>
                    <IconButton onClick={navigateTo} icon={'eye'} size={'large'} bgColor={'white'} border={true}/>
                </div>
            </div>
            <h3 className='text-gray-500 my-0.5'>{firstLetterUpper(category)}</h3>
            <h3 onClick={navigateTo} className='font-semibold cursor-pointer'>{title}</h3>
            <h3 className='font-bold'>$ {price.toFixed(2)}</h3>
        </div>
    );
});

export {Product};