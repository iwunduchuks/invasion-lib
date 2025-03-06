import React, { useEffect, useState } from "react";
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

    let filterOption = props.options;

    const [typing, setTyping] = useState(false)

    const [filteredOption, setFilteredOption] = useState(props.options);

    const [selected, setSelected] = useState({name: '', value: ''});

    if (props.selected) {
        props.selected(selected)
    }

    const handleOnChange = (event: any) => {
        const text = event.target.value
        setInputState(text)
        setTyping(true)

        // set search Filter
        if (text == '') {
            setFilteredOption(props.options);   // reset filter 
            filterOption = props.options;
        }
        else {
            const filter = props.options.filter((option) => {
                return(option.name.toLowerCase().includes(text.toLowerCase()))
            })
            if (filter[0]) {
                setFilteredOption(filter);
                filterOption = filter;
            }
            else {
                setFilteredOption([{name: '', value: ''}]);
                filterOption = [{name: '', value: ''}];
            }
        }
    }

    const handleOnBlur = (event: any) => {
        event;
        setTyping(false)
        setFilteredOption(props.options) // resets filter
        filterOption = props.options
        filteredOption
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
                    onBlur: handleOnBlur
            }} 
            />
            
            <div 
            className={Style.arrow}
            >
            </div>
            
            <Menu 
            checklist={inputState}
            options={typing? filteredOption: filterOption} 
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