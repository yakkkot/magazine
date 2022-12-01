import React, {DetailedHTMLProps, HTMLAttributes, memo} from 'react';

import {CartItem} from "../CartItem/CartItem";
import {IProduct} from "../../interfaces/IProduct";

interface ICart extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {products:IProduct[]}


const Cart = memo(({products, ...props}: ICart) : JSX.Element => {

    return (
        <div className='grid small:max-h-[65%] max-h-[55%] mb-1 shadow-md overflow-y-scroll px-4 py-2' {...props}>
            {products.map(product => <CartItem key={product.id} product={product}/>)}
        </div>
    );
});

export {Cart};