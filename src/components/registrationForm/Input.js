import React from 'react';
import {
    Label,
    GroupInput,
    Input,
    ErrorLegend,
    ValidationIcon} from '../../assets/elements/Registration_Form';
import { faCheckCircle,faTimesCircle } from '@fortawesome/free-solid-svg-icons'
const LogInput = ({ estado, cambiarEstado, type, label, placeholder, errorLegend, name, regularPhrase }) => {
    const onChange = (e) => {
        cambiarEstado({ ...estado, campo: e.target.value });
    }

    const validation = () => {
        if (regularPhrase) {
            if (regularPhrase.test(estado.campo)) {
                cambiarEstado({ ...estado, valido: 'true' })
            } else {
                cambiarEstado({ ...estado, valido: 'false' })
            }
        }
    }

    return (

        <div>
            <Label htmlFor={name}>{label}</Label>
            <GroupInput>
                <Input
                    type={type}
                    placeholder={placeholder}
                    id={name}
                    value={estado.campo}
                    onChange={onChange}
                    onKeyUp={validation}
                    onBlur={validation}
                    valido={estado.valido}
                />
                <ValidationIcon 
                icon={estado.valido === 'true' ? faCheckCircle : faTimesCircle} 
                valido={estado.valido}
                />
            </GroupInput>
            <ErrorLegend valido={estado.valido}>{errorLegend}</ErrorLegend>
        </div>
    );
}

export default LogInput;
