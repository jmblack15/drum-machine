import React from"react";
import {Col} from 'react-bootstrap'

const Buttons = (props) => {
   return (
      <Col id='drum-bank' style={{margin: 'auto'}}>
         {
            props._renderButtons()
         }
      </Col>
   )
}

export default Buttons;