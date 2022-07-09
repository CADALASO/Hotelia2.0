import Input from './Input';
import '../../assets/css/Form.css';
import imagotype_white from '../../assets/img/imagotype-white.png';


const Form = () => {

    return (
        <main className='containerForm'>
            <form action="" className='form'>
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
                        <div className='container-inputs'>
                            <Input
                                tipo="text"
                                label="Nombre(s):"
                                name="nombre"
                                placeholder="Carol Daniela"
                            />
                            <Input
                                tipo="text"
                                label="Apellidos(s):"
                                name="apellido"
                                placeholder="Garcia Carrato"
                            />
                            <div className='container-select '>
                                <label className='label'>Tipo de documento:</label>
                                <select name="select" className='input w'>
                                    <option value="1" selected>Cédula de Ciudadania</option>
                                    <option value="2" >Cédula de Extranjeria</option>
                                    <option value="3">Número de identificación personal</option>
                                    <option value="4">Número de identificación tributaria</option>
                                    <option value="5">Pasaporte</option>
                                </select>
                            </div>
                            <Input
                                tipo="text"
                                label="Número de documento:"
                                name="numdocumento"
                                placeholder="0123456789"
                            />
                        </div>
                    </div>
                    <div className='input-email'>
                        <Input
                            tipo="email"
                            label="Correo electrónico:"
                            name="email"
                            placeholder="correo@dominio.com"
                        />
                    </div>
                    <div className='container-elderly '>
                        <div className='group-input'>
                            <div className='w-input date m'>
                                <Input
                                    tipo="date"
                                    label="Fecha de nacimiento:"
                                    name="fecha"
                                />
                            </div>
                            <div className='container-select w-input'>
                                <label className='label'>Género:</label>
                                <select name="select" className='input'>
                                    <option value="1">Femenino</option>
                                    <option value="2" >Masculino</option>
                                    <option value="3">Transgénero</option>
                                    <option value="4" selected>No sabe/No responde</option>
                                </select>
                            </div>
                        </div>
                        <div className='group-input'>
                            <div className='container-select w-input m'>
                                <label className='label'>País de origen:</label>
                                <select name="select" className='input' >
                                    <option value="1" selected>Colombia</option>
                                    <option value="2" >Mexico</option>
                                    <option value="3">España</option>
                                    <option value="4" >Argentina</option>
                                </select>
                            </div>
                            <div className='w-input'>
                                <Input
                                    tipo="tel"
                                    label="Teléfono de contacto:"
                                    name="tel"
                                    placeholder="1234567"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            <div className='btn'>
                <button type="submit" className='btn-save'>Guardar</button>
            </div>
        </form>
        </main >

    );
}



export default Form;