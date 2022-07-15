import '../assets/css/FormReg.css';
import imagotype_white from '../assets/img/imagotype-white.png';
import {
    Label,
    RegistrationForm,
    ButtonContainer,
    SaveButton,
    SuccessMessage,
    ErrorMessage
} from '../assets/elements/RegistrationForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import Input from '../components/registrationForm/Input';
import React, { useState } from 'react';
import { Select, MenuItem } from "@mui/material";
import countryArr from '../components/registrationForm/CountrySelect';



const Form = () => {

    const [selectedCountry, setSelectedCountry] = useState("");

    const selectCountryHandler = (value) => setSelectedCountry(value);
    const [nombre, cambiarNombre] = useState({ campo: "", valido: null });
    const [apellido, cambiarApellido] = useState({ campo: "", valido: null });
    const [numDocumento, cambiarNumDocumento] = useState({ campo: "", valido: null });
    const [correo, cambiarCorreo] = useState({ campo: "", valido: null });
    const [fecha, cambiarFecha] = useState({ campo: "", valido: null });
    const [telefono, cambiarTelefono] = useState({ campo: "", valido: null });
    const [validForm, changeValidForm] = useState(null);

    const expressions = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/, // 7 a 14 numeros.
        numdoc: /^\d{5,10}$/ // 5 a 10 numeros.
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (
            nombre.valido === 'true' &&
            apellido.valido === 'true' &&
            correo.valido === 'true' &&
            fecha.valido === 'true' &&
            telefono.valido === 'true'
        ) {
            changeValidForm(true);
            cambiarNombre({ campo: '', valido: null });
            cambiarApellido({ campo: '', valido: null });
            cambiarCorreo({ campo: '', valido: null });
            cambiarFecha({ campo: '', valido: null });
            cambiarTelefono({ campo: '', valido: null });
        } else {
            changeValidForm(false);
        }
    }

    return (
        <main className='containerForm'>
            <i class="fa-solid fa-circle-arrow-left"></i>
            <RegistrationForm action='' onSubmit={onSubmit}>
                <div className='headerForm'>
                    <img src={imagotype_white} alt="imagotype_white" />
                    <i class="fa-solid fa-circle-arrow-left"></i>
                </div>
                <h1 className='title-Form'>COMPLETA TUS DATOS</h1>
                <div className='container-elderly'>
                    <div className='container-input-iden'>
                        <div className='container-photo'>
                            <i class="fa-solid fa-camera"></i>
                            <p>Agregar Foto</p>
                        </div>
                    </div>
                </div>
                <Input
                    estado={nombre}
                    cambiarEstado={cambiarNombre}
                    type="text"
                    name="nombre"
                    label="Nombre(s)"
                    placeholder="Carol Daniela"
                    errorLegend="El nombre solo puede contener letras y espacios."
                    regularPhrase={expressions.nombre} />
                <Input
                    estado={apellido}
                    cambiarEstado={cambiarApellido}
                    type="text"
                    name="apellido"
                    label="Apellido(s)"
                    placeholder="Garcia Cerrato"
                    errorLegend="El apellido solo puede contener letras y espacios."
                    regularPhrase={expressions.nombre} />
                <Input
                    estado={numDocumento}
                    cambiarEstado={cambiarNumDocumento}
                    type="text"
                    name="numdoc"
                    label="Número de documento"
                    placeholder="1234567890"
                    errorLegend="El número de documento solo puede contener números, mínimo 5 y máximo son 1O dígitos. "
                    regularPhrase={expressions.numdoc} />
                <Input
                    estado={correo}
                    cambiarEstado={cambiarCorreo}
                    type="email"
                    name="correo"
                    label="Correo Electrónico"
                    placeholder="correo@dominio.com"
                    errorLegend="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
                    regularPhrase={expressions.correo} />
                <Input
                    estado={fecha}
                    cambiarEstado={cambiarFecha}
                    type="date"
                    name="fecha"
                    label="Fecha de nacimiento"
                    errorLegend="Ingresa tu fecha de nacimiento."
                />
                <div>
                    <Label>País de origen</Label>
                    <div>
                        <Select
                            value={selectedCountry}
                            onChange={(e) => selectCountryHandler(e.target.value)}
                        >
                            {!!countryArr?.length &&
                                countryArr.map(({ label, value }) => (
                                    <MenuItem key={value} value={value} >
                                        {label}
                                    </MenuItem>
                                ))}
                        </Select>
                    </div>
                </div>
                <Input
                    estado={telefono}
                    cambiarEstado={cambiarTelefono}
                    type="text"
                    name="telefono"
                    label="Teléfono de contacto"
                    placeholder="1234567"
                    errorLegend="El teléfono solo puede contener números, mínimo 7 y máximo son 14 dígitos."
                    regularPhrase={expressions.telefono} />



                {validForm === false && <ErrorMessage>
                    <p>
                        <FontAwesomeIcon icon={faExclamationTriangle} />
                        <b>Error: </b>Por favor diligencia el formulario correctamente.
                    </p>
                </ErrorMessage>}
                <ButtonContainer>
                    <SaveButton type='submit'>GUARDAR</SaveButton>
                    {validForm === true && <SuccessMessage>Registraste tus datos correctamente.</SuccessMessage>}
                </ButtonContainer>
            </RegistrationForm>
        </main >

    );
}



export default Form;