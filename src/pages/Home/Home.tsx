import React, {memo} from 'react';

import {Banner, Products} from "../../components";


const Home = memo((): JSX.Element => {

    return (
        <>
            <Banner/>
            <section id={'products'} className='container mx-auto p-2'>
                <Products/>
            </section>
        </>
    );
});

export {Home};