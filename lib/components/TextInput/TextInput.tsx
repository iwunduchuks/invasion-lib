import './TextInput.css'
import Style from './TextInput.module.css'

export default function TextInput (props: {
    placeholder?: string,
    value?: string,
    onChange?: any,
}) {
    return (
        <>
        <input 
        className={Style.TextInput}
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        {...props}
        />
        </>

    )
}