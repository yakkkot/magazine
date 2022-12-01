import React, {useEffect, useState} from 'react';

import {BsHandbag} from "react-icons/bs";
import cn from "classnames"
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {setShowbar} from "../../redux";
import Logo from "../../img/logo.svg"

const Header = (): JSX.Element => {

    const [isShadow, setIsShadow] = useState<boolean>(false);

    const dispatch = useAppDispatch();
    const {bagArr} = useAppSelector(state=> state.shop);

    const openSidebar = () => dispatch(setShowbar());

    const scrollShadow = () => window.scrollY > 65 ? setIsShadow(true) : setIsShadow(false);

    useEffect(() => {
        window.addEventListener('scroll', scrollShadow);
        return () => window.removeEventListener('scroll', scrollShadow);
    });

    return (
        <header className={cn('h-[65px] fixed top-0 w-full z-10 p-3 transition-all duration-300 bg-none', {
            'shadow-xl bg-white': isShadow
        })}>
            <div className={'container mx-auto flex items-center justify-between'}>
                <a href="/"><img src={Logo} alt={'logo'} className='w-[35px]'/></a>
                <button onClick={openSidebar} className='relative'>
                    <BsHandbag size={30}/>
                    <div className='absolute w-4 h-4 p-1 top-5 flex items-center justify-center text-[12px] right-0
                     rounded-full text-white bg-pink-600'>
                        {bagArr.length}
                    </div>
                </button>
            </div>
        </header>
    );
};

export {Header};