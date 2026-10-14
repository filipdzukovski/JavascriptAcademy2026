import React from 'react';

export const Input = ({type,placeholder,value,onChange,changeInputType,name}) =>{ 
    console.log(type)
    return(
        <p>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
            />
        { name === "password" &&   
        <button type='button' onClick={changeInputType} className='eye-button'>
                <i className={type === 'password' ? 'fa fa-eye-slash' :'fa fa-eye'}></i>
            </button>}
        </p>
    )
}