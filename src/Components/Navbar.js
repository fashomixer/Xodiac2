import React, { Component, createRef } from 'react'
import { NavPanel } from '@duik/it'
import '@duik/it/dist/styles.css'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faAnchor } from '@fortawesome/free-solid-svg-icons'
import AccordionNav from './MenuBar.js'
import { Sticky } from 'semantic-ui-react'


export default class MainNavbar extends Component {
  contextRef = createRef()

    render() {
      return (
    <div ref={this.contextRef}
      style={{
        height: '1000px',
        position: 'sticky'
      }}
    >
      <Sticky context={this.contextRef}>
        <NavPanel dark style={
              {color: 'white'}}> 
          <AccordionNav />
        </NavPanel>
      </Sticky>
    </div>
   )
  }
}
