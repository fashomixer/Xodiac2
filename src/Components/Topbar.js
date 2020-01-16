import React, { Component, createRef } from 'react'
import { Container } from 'semantic-ui-react'

export default class StickyTopMenu extends Component {
  contextRef = createRef()
  
    render() {
      return (
    <div ref={this.contextRef}
      style={{
        height: '100px',
        position: 'sticky'
      }}
    >
    
      <Sticky context={this.contextRef}>
        <Container>
        </Container>
      </Sticky>
    </div>
    )
  }
}

export default StickyTopMenu
