import React, {useEffect} from 'react';

import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {addToCart, getOneProduct} from "../../redux";
import {Button} from "../../components";

const ProductPage = (): JSX.Element => {

    const {id} = useParams();

    const {oneProduct} = useAppSelector(state => state.shop);
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const addCart = () => oneProduct && dispatch(addToCart(oneProduct));
    const navigateTo = () => navigate('/home');

    useEffect(() => {
        if (id) dispatch(getOneProduct(+id))
    }, [id]);

    return (
        <section className='calcHeight flex items-center justify-center'>
            {oneProduct && id && oneProduct.id===+id ?
                <div
                    className='container mx-auto grid md:grid-cols-10 grid-cols-1 md:gap-12 gap-4 items-center justify-items-center p-4'>
                    <div className='md:col-span-4 col-span-1 md:p-0 p-12'>
                        <img className='max-h-[350px] h-auto' src={oneProduct.image}
                             alt={oneProduct.title}/>
                    </div>
                    <div className='space-y-4 md:col-span-6 col-span-1'>
                        <h1 className='text-2xl font-semibold'>{oneProduct.title}</h1>
                        <p className='text-xl font-bold'>$ {oneProduct.price.toFixed(2)}</p>
                        <p className='md:text-lg text-[14px] text-justify'>{oneProduct.description}</p>
                        <div className='text-white grid md:grid-cols-3 grid-cols-1 md:gap-4 gap-2 items-center'>
                            <Button onClick={addCart} color={'pink'} className='col-span-1'>Add to bag</Button>
                            <Button onClick={navigateTo} color={'black'} className='col-span-1'>back to products</Button>
                        </div>
                    </div>
                </div>
                : <h1 className='text-3xl font-bold'>Loading...</h1>
            }
        </section>
    );
};

export {ProductPage};