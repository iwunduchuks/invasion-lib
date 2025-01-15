import Style from './Card.module.css'

export default function Card (props: {
    children: any,
    style?: object
}) {
    return (
        <div className={Style.card} style={props.style} {...props}>
            {props.children}
        </div>
    )
}