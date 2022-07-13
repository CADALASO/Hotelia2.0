let tipodoc = [
    {
        "id": 1,
        "codigo": "CC",
        "tipo": "Cédula de ciudadania"
    },
    {
        "id": 2,
        "codigo": "CE",
        "tipo": "Cédula de extranjeria"
    },
    {
        "id": 3,
        "codigo": "NIP",
        "tipo": "Número de identificación personal"
    },
    {
        "id": 4,
        "codigo": "NIT",
        "tipo": "Número de identificación tributaria"
    }
];

let genero = [
    {
        "id": 1,
        "codigo": "NS/NR",
        "tipo": "No sabe/No responde"
    },
    {
        "id": 2,
        "codigo": "F",
        "tipo": "Femenino"
    },
    {
        "id": 3,
        "codigo": "M",
        "tipo": "Maculino"
    },
    {
        "id": 4,
        "codigo": "TG",
        "tipo": "Transgénero"
    }

]

export function getAll(){
    return tipodoc, genero;
}
