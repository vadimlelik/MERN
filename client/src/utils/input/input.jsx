import React from 'react';

const Input = ({type,value,placeholder,setValue}) => {
    return (
        <input
            onChange={(event)=>setValue(event.target.value)}
            value={value}
            type={type}
            placeholder={placeholder}
    />
    );
};

export default Input;