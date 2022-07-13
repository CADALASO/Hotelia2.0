import styled, { css } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const colors = {
    border: "#FFFFFF",
    error: "#FF820D",
    exito: "#48D6ED"
}

const RegistrationForm = styled.form`
background-color: rgba(51, 51, 51, .8);
width: 90%;
margin: 0 auto;
border-radius: 20px;
padding: 1rem 1rem;

@media (min-width:1024px) {
    width: 80%;
`;

const Label = styled.label`
display: block;
color: var(--white);
font-family: 'Biko';
cursor: pointer;
padding: 5px ;
min-height:30px;
`;

const GroupInput = styled.div`
position: relative;
z-index: 90;
`;

const Input = styled.input`
width: 100%;
height: 30px;
line-height:30px;
background-color: rgba(51, 51, 51, 0);
border: 0.5px solid var(--white);
padding: 0 40px 0 10px;
border-radius: 3px;
color: var(--white);
font-family: 'Biko';
transition: .3s ease all;

&:focus{
    border: 2px solid ${colors.border};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163,163,163,.4)
}

&[type="date"]::-webkit-calendar-picker-indicator{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    color: transparent;
    background: 0 0;
    margin: 0;
    opacity: 0;
    pointer-events: auto;
}
&[type="date"]:placeholder{
color: red;
}

${props => props.valido === 'true' && css`
    border: 0.5px solid var(--white);
`}

${props => props.valido === 'false' && css`
border: 0.5px solid ${colors.error} !important;
`}
`;

const ErrorLegend = styled.p`
font-size: 12px;
margin: 5px 0 0 0;
color: ${colors.error};
font-family:'Biko';
display:none;

${props => props.valido === 'true' && css`
display:none;
`}

${props => props.valido === 'false' && css`
display: block;
`}
`;

const ValidationIcon = styled(FontAwesomeIcon)`
position: absolute;
right: 10px;
bottom: 7px;
z-index: 100;
font-size: 16px;
opacity:0; 
${props => props.valido === 'true' && css`
opacity:1;
color:${colors.exito}
`}

${props => props.valido === 'false' && css`
opacity:1;
color:${colors.error}
`}
`;


const ButtonContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 2rem 0;
`;

const SaveButton = styled.button`
height: 30px;
line-height: 30px;
width: 25%; 
background-color: var(--green);
font-family: 'Akrobat';
color: var(--white);
text-transform: uppercase;
border-radius: 3px;
box-shadow: 0 1px 1px var(--black);
font-size: 18px;
cursor:pointer;
transition: .1s ease all;
border: none;
margin: 1rem;

&:hover{
    box-shadow: 3px 0px 30px rgba(163,163,163,1) 
}
`;

const SuccessMessage = styled.p`
font-size: 15px;
color: ${colors.exito};
font-family:'Biko';
`;

const ErrorMessage = styled.div`
height: 30px;
line-height:15px;
color:${colors.error};
padding: 0 2px;
border-radius: 3px;
width: 100%;
font-family: 'Biko';
font-size:15px;
text-align:center;

p{
    margin: 10px 0;
}

b{
    margin-left:10px;
}
`;


export {
    RegistrationForm,
    Label,
    GroupInput,
    Input,
    ErrorLegend,
    ValidationIcon,
    ButtonContainer,
    SaveButton,
    SuccessMessage,
    ErrorMessage
}