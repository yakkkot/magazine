import React from 'react';

import {icons, IIconButton} from "./IconButton.props";
import cn from "classnames"


const IconButton = ({icon, bgColor, size, border = false, ...props}: IIconButton): JSX.Element => {


    const IconComp = icons[icon];
    return (
        <button className={cn('box-border rounded-md', {
            'bg-pink-600 text-white border border-pink-600': bgColor === 'red',
            'bg-white text-black': bgColor === 'white',
            'text-[12px] p-2': size === 'small',
            'text-[16px] p-3': size === 'large',
            'border border-black border-opacity-20': border
        })}
                {...props}>
            <IconComp/>
        </button>
    );
};

export {IconButton};