import React from "react";
import { GroupInput, Label, MenuItem, Select } from "../../assets/elements/RegistrationForm";

const TipoDoc = () => {

    return (
        <GroupInput>
            <Label>Tipo de Documento</Label>
            <Select>
                <MenuItem>Selecciona una opción</MenuItem>
                <MenuItem value="CC">Cédula de ciudadania</MenuItem>
                <MenuItem value="CE">Cédula de extranjeria</MenuItem>
                <MenuItem value="NIP">Número de identificación personal</MenuItem>
                <MenuItem value="NIT">Número de identificación tributaria</MenuItem>
            </Select>
        </GroupInput>
    )
}

export default TipoDoc;