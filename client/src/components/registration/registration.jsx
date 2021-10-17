import React, {useState} from 'react';
import Input from "../../utils/input/input";
import {registration} from "../../actions/user";
import './registration.css'


const Registration = () => {

    const [email,setEmail]= useState('')
    const [password , setPassword]= useState('')
    return (
        <div className='registration'>
            <div className="registration__header">Регистрация</div>
            <Input placeholder='Введите email...' type='text' value={email} setValue={setEmail}/>
            <Input placeholder='Введите пароль...' type='password' value={password} setValue={setPassword}/>
            <button onClick={()=> registration(email,password)}>Войти</button>
        </div>
    );
};

export default Registration;