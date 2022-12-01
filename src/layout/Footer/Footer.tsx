import React from 'react';

import {FaLinkedin,FaGithubSquare} from "react-icons/fa";


const Footer = (): JSX.Element => {
    return (
        <footer className='bg-black/90 h-[65px] p-3 text-white flex items-center'>
            <div className='container mx-auto flex items-center justify-center space-x-4'>
                <a className='hover:animate-bounce' href="https://www.linkedin.com/in/yakkkot/" target={'_blank'}>
                    <FaLinkedin size={30}/>
                </a>
                <a className='hover:animate-bounce' href="https://github.com/yakkkot" target={'_blank'}>
                    <FaGithubSquare size={30}/>
                </a>
                <a className='font-semibold' href="mailto:k0tjeee777@gmail.com">k0tjeee777@gmail.com</a>
            </div>
        </footer>
    );
};

export {Footer};