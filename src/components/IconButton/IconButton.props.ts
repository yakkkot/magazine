import {DetailedHTMLProps, HTMLAttributes} from "react";

import {AiOutlinePlus as plus} from "react-icons/ai";
import {AiOutlineMinus as minus} from "react-icons/ai";
import {BiShow as eye} from "react-icons/bi";
import {IoMdArrowForward as arrow} from "react-icons/io";



export interface IIconButton extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    icon: IconName;
    bgColor: 'white' | 'red';
    border?: boolean;
    size: 'small' | 'large';
}
export const icons = {
    eye,
    plus,
    arrow,
    minus
};

export type IconName = keyof typeof icons;