import React, {DetailedHTMLProps, HTMLAttributes, memo} from 'react';

import GirlImg from "../../img/woman_hero.png"
import {Button} from "../Button/Button";

interface IBanner extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Banner = memo(({ ...props}: IBanner) : JSX.Element => {

    const scrollTo = () => {
        const element = document.getElementById("products");
        element!.scrollIntoView({behavior: "smooth"});
    };

    return (
        <section className='h-screen bg-hero bg-no-repeat bg-cover bg-center flex items-center justify-center' {...props}>
            <div className='container mx-auto flex items-center justify-evenly px-3'>
                <div className='text-black uppercase small:space-y-4 space-y-2'>
                    <div className='text-xl font-semibold flex items-center'><div className='h-0.5 w-10 bg-pink-700 mr-2'/>
                        New Trend
                    </div>
                    <h2 className='small:text-7xl text-6xl font-light'>AUTUMN SALE STYLISH
                        <div className='font-bold'>WOMENS</div>
                    </h2>
                    <Button onClick={scrollTo} color={'black'}>Go Shopping</Button>
                </div>
                <img className='hidden md:block pt-0 md:pt-16' src={GirlImg} alt={'banner'}/>
            </div>
        </section>
    );
});

export {Banner};

