import React, {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';

import cn from "classnames"

export interface IButton extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    children: ReactNode;
    color: 'pink' | 'black' | 'silver';
}

const Button = ({color, children, className, ...props}: IButton): JSX.Element => {

    return (
        <button className={cn(className, 'uppercase py-2.5 px-6 duration-300 rounded-[2px]', {
            'bg-pink-600 text-white hover:bg-pink-700': color === 'pink',
            'bg-black/80 text-white hover:bg-black': color === 'black',
            'bg-gray-400/80 text-black hover:bg-gray-400': color === 'silver',
        })} {...props}>
            {children}
        </button>
    );
};

export {Button};