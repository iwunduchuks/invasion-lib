import React from "react";
import classNames from "classnames";
import '../../style/global.css';
import Style from './AppBar.module.css';

export default function AppBar(props: {
    children: React.ReactNode,
    ClassName?: string,
    id?: string,
    style?: object,
}) {

    const defaultClassName = classNames(
        Style.appbar, 
        Style.base,
        props.ClassName && props.ClassName
    )
    return (
        <div 
        className={defaultClassName}
        id= {props.id}
        style= {props.style}
        {...props}
        >
        {props.children}
        </div>
    )
}

