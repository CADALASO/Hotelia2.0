import React from 'react';
import '../../assets/css/Form.css';

const ComponenteInput = ({ tipo, label, name, placeholder }) => {
    return (
        <div>
            <label htmlFor={name} className='label'>{label}</label>
            <div>
                <input
                    className='input w'
                    type={tipo}
                    id="nombre"
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
}

export default ComponenteInput;
