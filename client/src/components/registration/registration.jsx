import React from 'react';
import Input from "../../utils/input/input";

const Registration = () => {
    return (
        <div className='registration'>
            <div className="registration__header">Регистрация</div>
            <Input placeholder='Введите email...' type='text'/>
        </div>
    );
};

export default Registration;