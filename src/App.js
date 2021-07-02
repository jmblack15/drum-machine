import React, { useState } from "react";
import { Container, Row, Button } from 'react-bootstrap'
import Buttons from './components/Buttons'
import Controller from './components/Controller'
import Sounds from './sound/sounds.json'
import './styles/app.css'

const App = () => {

   const [table, setTable] = useState({ soundsTable: false });
   const [on, setOn] = useState(false);
   const [volumen, setVolumen] = useState(0.50)

   const _handleTable = (e) => {
      const { htmlFor } = e.target;

      if (htmlFor === 'on') {
         return setTable({
            soundsTable: true
         });
      }
      if (htmlFor === 'off') {
         return setTable({
            soundsTable: false
         });
      }
   }

   const _handleOn = (e) => {
      const { checked } = e.target;
      setOn(checked);
   }

   const bankOne = Sounds.bankOne;
   const bankTwo = Sounds.bankTwo;
   let sound = '';

   const _renderButtons = () => {

      table.soundsTable ? sound = bankOne : sound = bankTwo;

      return sound.map(element => {

         const handleKey = (e) => {
            if (e.keyCode === element.key) {
               _handleSound(element.url);
            }
         }

         return (
            <Button tabIndex={0} key={element.key} id={element.id} url={element.url} onClick={() => _handleSound(element.url)} className="drum-pad" onKeyDown={window.onkeydown = handleKey} >{element.letter}</Button>
         )

      })
   }

   const _handleSound = (url) => {
      if (on.checked) {
         const sound = new Audio();
         sound.src = url;
         sound.volume = volumen;
         sound.play();
      }
   }

   const adjustVolume = (e) => {
      setVolumen(e.target.value);
   }

   
   return (
      <div id='drum-machine'>
         <Container>
            <Row id='display'>
               <Buttons _renderButtons={_renderButtons} />
               <Controller _handleTable={_handleTable} _handleOn={_handleOn} volumen={volumen} adjustVolume={adjustVolume} />
            </Row>
         </Container>
      </div>
   );
}

export default App;
