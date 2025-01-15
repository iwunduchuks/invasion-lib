import React from "react";
import classNames from "classnames";
import '../../style/global.css';
import Style from './Toggle.module.css'

export default function Toggle(props:{
    children: any,
    onChange?: any,
    variant?: 'dark-filled' | 'light-filled',
    ClassName?: string,
    id?: string,
    style?: object
}) {
    
    const defaultClassName = classNames(
        Style.toggle, 
        Style.base,
        props.ClassName && props.ClassName
    )
    return (
        <form 
            className= {defaultClassName}
            id={props.id}
            style={props.style}
        >
            {React.Children.map(props.children, (child) => 
                React.cloneElement(child, {
                    variant: props.variant,
                    onChange: props.onChange,
                    ...props
                    }
                )
            )}
        </form>
    )
}