import classNames from "classnames";
import Style from './Button.module.css';
import '../../style/global.css';

export default function Button(props: {
    name: string,
    variant?: 'filled' | 'outlined' | 'text',
    disabled?: boolean,
    onClick?: () => void,
    ClassName?: string,
    id?: string,
    style?: React.CSSProperties
}) {

    const defaultClassName = classNames(
        Style.button, 
        Style.base, 
        props.variant? Style[props.variant]: Style.filled,
        props.ClassName && props.ClassName
    )

    return (
        <button 
        className={defaultClassName} 
        onClick={props.onClick} 
        disabled= {props.disabled && props.disabled}
        id={props.id}
        style={props.style}
        {...props}
        >
          {props.name} 
        </button>
    )
}