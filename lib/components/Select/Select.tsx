import React, { useEffect, useRef, useState } from "react";
import { TextInput } from "../TextInput";
import { Menu } from "../Menu";
import Style from './Select.module.css'

export default function Select (props: {
    options: {name: string, value: string}[],
    placeholder: string,
    selected?: React.Dispatch<React.SetStateAction< {
        name: string;
        value: string;
    }>>
}) {

    const [inputState, setInputState] = useState('');

    const [filteredOption, setFilteredOption] = useState(props.options);

    const [selected, setSelected] = useState({name: '', value: ''});

    const textInputRef = useRef<HTMLInputElement>(null);

    if (props.selected) {
        props.selected(selected)
    }

    const handleOnChange = (event: any) => {
        const text = event.target.value
        setInputState(text)
        console.log('text', text)

        // set search Filter
        if (text == '') {
            setFilteredOption(props.options)   // reset filter 
        }
        else {
            const filter = props.options.filter((option) => {
                return(option.name.toLowerCase().includes(text.toLowerCase()))
            })
            if (filter[0]) {
                setFilteredOption(filter)
            }
            else {
                setFilteredOption([{name: '', value: ''}])
            }
        }
    }

    const handleArrowClick = (event: any) => {
        event;
        textInputRef.current?.click()
    }

    const handleOnBlur = (event: any) => {
        event;
        setFilteredOption(props.options) // resets filter
    }

    useEffect(() => {
        if (selected.name == '') {

        }
        else {
            setInputState(selected.name)
        }
    }, [selected])
    
    return (
        <div className={Style.dropdown} style={{position: 'relative'}}>
            <TextInput 
            placeholder={props.placeholder} 
            onChange={handleOnChange}
            value={inputState}
            {...{
                    id: Style.text,
                    ref: textInputRef,
                    onBlur: handleOnBlur
            }} 
            />
            
            <div 
            className={Style.arrow} 
            onClick={handleArrowClick}></div>
            
            <Menu 
            checklist={inputState}
            options={inputState?filteredOption: props.options} 
            classname={Style.menu}
            onselected={setSelected}
            style={
                {
                    position: 'absolute',
                    top: 'calc(100% + 0.25rem)'
                }
            }
            />

        </div>
    )
}