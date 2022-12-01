import React, {DetailedHTMLProps, HTMLAttributes, memo} from 'react';

import {useNavigate} from "react-router-dom";
import {AiOutlineClose} from "react-icons/ai";
import {IProduct} from "../../interfaces/IProduct";
import {IconButton} from "../IconButton/IconButton";
import {useAppDispatch} from "../../hooks/hooks";
import {addToCart, decrementAmount, removeCart} from "../../redux";


interface ICartItem extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {product: IProduct;}

const styleIcons = 'flex items-center justify-center w-[30px] h-[30px] text-center border border-black border-opacity-20';

const CartItem = memo(({product, ...props}: ICartItem): JSX.Element => {

    const {image, title, amount, price, id} = product;

    const dispatch = useAppDispatch();

    const navigate = useNavigate();
    const navigateTo = () => navigate(`/product/${id}`);

    const decrementValue = () => dispatch(decrementAmount(id));
    const incrementValue = () => dispatch(addToCart(product));
    const removeItem = () => dispatch(removeCart(id))

    return (
        <div className='flex items-start space-x-4  border-b border-b-black/20 py-1 last:border-none' {...props}>
            <div onClick={navigateTo} className='h-[140px] flex items-center cursor-pointer'>
                <img className='max-w-[80px]' src={image} alt={title}/>
            </div>
            <div className='text-[14px] uppercase font-semibold space-y-2 self-center w-full'>
                <div className='flex justify-between'>
                    <p onClick={navigateTo} className='cursor-pointer'>{title}</p>
                    <button onClick={removeItem} className='flex items-start py-1'><AiOutlineClose size={15}/></button>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <IconButton onClick={decrementValue} className={styleIcons} icon={'minus'} bgColor={'white'}
                                    size={'small'} border={false}/>
                        <span className={styleIcons}>{amount}</span>
                        <IconButton onClick={incrementValue} className={styleIcons} icon={'plus'} bgColor={'white'}
                                    size={'small'} border={false}/>
                    </div>
                    <p className='opacity-40'>$ {price}</p>
                    <p className='font-bold'>$ {amount && (amount * price).toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
});

export {CartItem};