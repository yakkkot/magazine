import React, {memo} from 'react';

import cn from "classnames";

import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {removeAll, setShowbar} from "../../redux";
import {Button, Cart, IconButton} from "../../components";
import {BsTrash} from "react-icons/bs";


const Sidebar = memo((): JSX.Element => {

    const dispatch = useAppDispatch();
    const {isShowSidebar,bagArr} = useAppSelector(state=> state.shop);

    const closeSidebar = () => dispatch(setShowbar());
    const remove = () => dispatch(removeAll());

    const sum = bagArr.reduce((acc, value) => value.amount ? value.price * value.amount + acc : 0, 0);

    return (
        <div className={cn('fixed top-0 z-20 shadow-2xl  h-full w-full md:w-[30vw] bg-white ' +
            'transition-all duration-500',
            {
                'right-0 opacity-100': isShowSidebar,
                '-right-full opacity-0': !isShowSidebar
            })}>
            <div className='flex items-center justify-between p-4 border-b shadow-md border-b-black'>
                <h2 className='font-semibold uppercase'>Shopping bag ({bagArr.length})</h2>
                <IconButton onClick={closeSidebar} className={'text-xl'} icon={'arrow'} size={'large'} bgColor={'white'}
                            border={false}/>
            </div>
            {bagArr.length !== 0 && <Cart products={bagArr}/>}
            <div className='absolute bottom-0 w-full p-4'>
                <div className='w-full py-3 flex items-center justify-between border-t border-t-black/20 '>
                    <div className='uppercase font-semibold'>
                        <span>Total: $ </span>
                        {sum.toFixed(2)}
                    </div>
                    <button onClick={remove} className='p-2 bg-red-700 text-white rounded-md'>
                        <BsTrash size={20}/>
                    </button>
                </div>
                <Button color={'silver'} className='w-full mb-1'>view cart</Button>
                <Button color={'black'} className='w-full'>checkout</Button>
            </div>
        </div>

    );
});

export {Sidebar};