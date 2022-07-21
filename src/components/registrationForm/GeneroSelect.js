import React from "react";
import { GroupInput, Label, MenuItem, Select } from "../../assets/elements/RegistrationForm";

const Genero = () => {

    return (
        <GroupInput>
            <Label>Genero</Label>
            <Select>
                <MenuItem>Selecciona una opción</MenuItem>
                <MenuItem value="NS/NR">No sabe/No responde</MenuItem>
                <MenuItem value="F">Femenino</MenuItem>
                <MenuItem value="M">Maculino</MenuItem>
                <MenuItem value="TG">Transgénero</MenuItem>
            </Select>
        </GroupInput>
    )
}

export default Genero;