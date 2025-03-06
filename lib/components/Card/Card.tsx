import Style from './Card.module.css'

export default function Card (props: {
    children: React.ReactElement,
    style?: React.CSSProperties
    id?: string
}) {
    return (
        <div className={Style.card} id= {props.id} style={props.style} {...props}>
            {props.children}
        </div>
    )
}