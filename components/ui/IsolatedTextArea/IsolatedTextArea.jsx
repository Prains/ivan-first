"use client"
import { Textarea } from '@chakra-ui/react'

const IsolatedTextArea = ({className, placeholder}) => {
    return (
        <Textarea placeholder={placeholder} className={className}/>
    );
};

export default IsolatedTextArea;