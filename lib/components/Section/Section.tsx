import React from "react";
import '../../style/global.css';
import Style from './Section.module.css'
import classNames from "classnames";

export default function Section(props:{
    children: React.ReactNode,
    gap?: '48px' | '24px' | '12px' | string,
    ClassName?: string,
    style?: object,
    id?: string
}) {
    
    const defaultClassName = classNames(
        Style.section, 
        Style.base,
        props.ClassName && props.ClassName
    );
    return (
        <div 
        className= {defaultClassName} 
        id={props.id} 
        style= {{gap: props.gap? props.gap: '24px', ...props.style}}
        {...props}
        >
            {props.children}
        </div>
    )
}

