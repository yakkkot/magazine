import React, {DetailedHTMLProps, HTMLAttributes, memo, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {getAllProducts} from "../../redux";
import {Product} from "../Product/Product";

interface IProductsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Products = memo(({ ...props}: IProductsProps) : JSX.Element => {

    const dispatch = useAppDispatch()
    const {products} = useAppSelector(state => state.shop)

    useEffect(()=>{
        dispatch(getAllProducts());
    },[])

    return (
            <div className={'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'} {...props}>
                {products?.map(product => <Product key={product.id} product={product}/>)}
            </div>
    );
});

export {Products};