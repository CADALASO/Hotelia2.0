import React from 'react'

function Footer() {
  return (
    <div>
      <section className='panoramica'></section>
      <footer className='footer'>
        <div className='line1-footer'>
            <p>TÉRMINOS Y CONDICIONES</p>   
            <p>HABITACIONES</p>  
            <p>CONTÁCTANOS</p>  
            <p>MAPA DEL SITIO</p>  
            <p>ACERCA DE NOSOTROS</p>           
        </div>
        <div className='otros'>
          <p>CARRERA 37 #24 - 29, BARRIO CORFERIAS</p>
          <p>RESERVAS@HOTELIA.COM    -    TEL: (601) 2679045</p>

          <div className='derechos'>
            <small>&copy; TODOS LOS DERECHOS RESERVADOS HOTELIA</small>
            <br/>
            <small>2022 | BOGOTÁ D. C. - COLOMBIA</small>
          </div>
          
        </div>
      </footer>
    </div>
  )
}

export default Footer