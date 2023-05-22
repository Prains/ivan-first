'use client'
import {Input} from '@chakra-ui/react'

const IsolatedInput = (props) => {
    return (
        <Input {...props} placeholder={props.placeholder}/>

    );
};

export default IsolatedInput;