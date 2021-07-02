import React from 'react';
import '../styles/interruptor.css'
import { Col } from 'react-bootstrap';

const Controller = (props) => {
   return (
      <Col>
         <h1>Jose manuel osorio</h1>
         <Col>
            <h4>Power</h4>
            <label className="switch">
               <input type="checkbox" onChange={props._handleOn} />
               <div className="slider round"></div>
            </label>
         </Col>

         <Col className='volume-slider'>
            <h4>Volumen {Math.floor(props.volumen * 10)}</h4>
            <input
               max='1'
               min='0'
               onChange={props.adjustVolume}
               step='0.01'
               type='range'
               value={props.volumen}
            />
         </Col>

         <Col >
            <h4>Modo</h4>
            <input type="radio" name="interruptor" id="prendido" />
            <input type="radio" name="interruptor" id="apagado" />
            <div className="interruptor-cuerpo" style={{ margin: "auto" }}>
               <div className="interruptor-tecla">
                  <label htmlFor="on" title="Desactivado" onMouseDown={props._handleTable}>___</label>
                  <label htmlFor="off" title="Activado" onMouseDown={props._handleTable}>___</label>
               </div>
            </div>
         </Col>
      </Col>
   )
}

export default Controller;