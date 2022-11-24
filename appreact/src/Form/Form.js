import React from 'react'
import Button from "./Button";
import Input from "./Input";

const Form = () => {
    return <>
        <Input id='email' label='E-mail'/>
        <Input id='senha' label='Senha' type='password' required/>
        <Button/>
    </>
}
export default Form;
