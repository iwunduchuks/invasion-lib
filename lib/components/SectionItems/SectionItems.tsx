import React from "react";
import '../../style/global.css';
import Style from './SectionItems.module.css'
import classNames from "classnames";

export default function SectionItems(props:{
    children: React.ReactNode,
    layout: 'full' | 
            'major-minor' | 
            'minor-major' | 
            'half-half' | 
            'minor4' | 
            'minor3' |
            'half-minor2' | 
            'minor2-half' | 
            'minor-half-minor',
    gap?: '48px' | '24px' | '12px' | string,
    style?: React.CSSProperties,
    ClassName?: string,
    id?: string
}) {
    
    const defaultClassName = classNames(
        Style['section-items'], 
        Style['base'],
        Style[props.layout],
        props.ClassName && props.ClassName
    );
    return (
        <div 
        className= {defaultClassName} 
        id={props.id}
        style={{gap: props.gap? props.gap: '24px', ...props.style}}
        {...props}
        >
            {props.children}
        </div>
    )
}