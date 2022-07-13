import styled from 'styled-components';


const Overlay = styled.div`
width: 100vw;
height: 100vh;
background-size: cover;
position:fixed ;
top: 0;
letf:0;
background: rgba(0,0,0,.5);
padding: 0 1rem;

display: flex;
align-items: center;
justify-content: ${props => props.positionModal ? props.positionModal : 'center'};
`
const ContainerModal = styled.div`
max-width: 500px;
width: 100%;
min-height: 100px;
background: #FFFFFF;
position: relative;
border-radius: 5px;
box-shadow: rgba(100,100,111,.2) 0px 7px 29px 0px;
padding: 10px 20px;
`
const HeaderModal = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 20px;
padding-bottom: 10px;
border-bottom: 1px solid #E8E8E8;

h3{
    font-family:'Akrobat';
    font-weigth: bold;
    font-size: 24px;
    color: #333333;
}

`
const ButtonClose = styled.button`
position: absolute;
top: 10px;
right:20px;

font-size: 30px;
border: none;
background: none;
cursor: pointer;
transition: .3s ease all;
color: #333333;
`
const BodyModal = styled.div`
width:100%;
display: flex;
flex-direction:column;
align-items:center;

img{
    width: 180px;
}

button{
    font-family:'Akrobat';
    background: #00A0C6;
    padding: .5rem 2rem;
    font-weigth: bold;
    border-radius:5px;
    font-size:18px;
    color: #000000;
    margin:.5rem 0; 
}

Input{
    width: 100%;
    padding: 0.5rem;
    font-family:'Biko';
    border: 0.5px solid #00A0C6;
    border-radius:5px;
    box-shadow: 1px 1px 1px #00A0C6;
    margin: 0.2rem 0;

    &::placeholder{
        color:#000;
    }
}
select{
    width: 100%;
    padding: 0.5rem 0.2rem;
    font-family:'Biko';
    border: 0.5px solid #00A0C6;
    border-radius:5px;
    box-shadow: 1px 1px 1px #00A0C6;
    margin:0.5rem 0;
}
label{
color: #000000;
font-weigth: bold;
font-family:'Biko';

}
h2{
    font-family:'Akrobat'; 
    text-shadow: 1px 1px 1px #000000;
    color:#B2B3B3;
    font-size:30px;
    margin:1rem 0;
}
`
export {
    Overlay,
    ContainerModal,
    HeaderModal,
    ButtonClose,
    BodyModal
}