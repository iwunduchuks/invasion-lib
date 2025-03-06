import Style from './ToggleItems.module.css'
import '../../style/global.css';
import classNames from 'classnames';

// for different componenet stye variants would be done with dynamic class names passed as props
// then style is left as inline style overide

export default function ToggleItems(props: {
    value: string,
    variant?: 'dark-filled' | 'light-filled',
    defaultChecked?: boolean,
    onChange?: (e: any) => void,
    ClassName?: string,
    id?: string,
    style?: React.CSSProperties
}) {


    const defaultClassName = classNames(
        Style['toggle-items'], 
        Style['base'], 
        props.variant? Style[props.variant]: Style['dark-filled'],
        props.ClassName && props.ClassName
    )

    return (
    <label>
        <input 
        type="radio" 
        name= 'toggle'
        value={props.value}
        defaultChecked= {props.defaultChecked && props.defaultChecked}
        onChange={props.onChange}/>
        <div
        className={defaultClassName}
        id={props.id}
        style={props.style}
        {...props}
        >{props.value}
        </div>
    </label>
    )
}