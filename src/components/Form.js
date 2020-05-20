import React from "react";
import './Form.css';

const Form = ({value, onChange, onCreat, onKeyPress}) => {
    return (
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
            <div className="create-button" onClick={onCreat}>
                추가
            </div>
        </div>
    );
};

export default Form;