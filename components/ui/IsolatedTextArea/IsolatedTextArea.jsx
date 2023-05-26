"use client"
import { Textarea } from '@chakra-ui/react'
import {useState} from "react";

const IsolatedTextArea = ({className, placeholder, value, onChangeText}) => {
    const [text, setText] = useState('')
    return (
        <Textarea onChange={onChangeText} value={value} placeholder={placeholder} className={className}/>
    );
};

export default IsolatedTextArea;