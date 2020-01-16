import React, { Component } from 'react'
import { Accordion, Form, Menu, Segment } from 'semantic-ui-react'

const Category = (
  <Form inverted>
    <Form.Group grouped>
      <Form.Checkbox label='Edibles' name='type' value='edibles' />
      <Form.Checkbox label='Concentrates' name='type' value='concentrates' />
      <Form.Checkbox label='Flower' name='type' value='flower' />
      <Form.Checkbox label='Pre Roles' name='type' value='pre roles' />
    </Form.Group>
  </Form>
)

const Strains = (
  <Form inverted>
     <Form.Group grouped>
      <Form.Checkbox label='Indica' name='type' value='indica' />
      <Form.Checkbox label='Indica Dominant' name='type' value='indica dominant' />
      <Form.Checkbox label='Sativa' name='type' value='sativa' />
      <Form.Checkbox label='Sativa Dominant' name='type' value='sativa dominant' />
      <Form.Checkbox label='Hybrid' name='type' value='hybrid' />
      <Form.Checkbox label='CBD' name='type' value='cbd' />
    </Form.Group>
  </Form>
)

const Brands = (
  <Form inverted>
     <Form.Group grouped>
      <Form.Checkbox label='VVS' name='type' value='vvs' />
      <Form.Checkbox label='Runtz' name='type' value='runtz' />
      <Form.Checkbox label='Alienlab' name='type' value='alienlab' />
      <Form.Checkbox label='LA Kush' name='type' value='la kush' />
      <Form.Checkbox label='Moxie' name='type' value='moxie' />
      <Form.Checkbox label='Jungle Boys' name='type' value='jungle boys' />
    </Form.Group>
  </Form>
)

const Potency = (
  <Form inverted>
    <Form.Group grouped>
      <Form.Checkbox label='Low' name='type' value='low' />
      <Form.Checkbox label='Normal' name='type' value='normal' />
      <Form.Checkbox label='Extreme' name='type' value='extreme' />
    </Form.Group>
  </Form>
)

export default class AccordionNav extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Segment inverted>
        <Accordion inverted as={Menu} vertical>
          <Menu.Item>
            <Accordion.Title
              active={activeIndex === 0}
              content='Category'
              index={0}
              onClick={this.handleClick}
            />
            <Accordion.Content active={activeIndex === 0} content={Category} />
          </Menu.Item>

          <Menu.Item>
            <Accordion.Title
              active={activeIndex === 1}
              content='Strains'
              index={1}
              onClick={this.handleClick}
            />
            <Accordion.Content active={activeIndex === 1} content={Strains} />
          </Menu.Item>

          <Menu.Item>
            <Accordion.Title
              active={activeIndex === 2}
              content='Brands'
              index={2}
              onClick={this.handleClick}
            />
            <Accordion.Content active={activeIndex === 2} content={Brands} />
          </Menu.Item>

          <Menu.Item>
            <Accordion.Title
              active={activeIndex === 3}
              content='Potency'
              index={3}
              onClick={this.handleClick}
            />
            <Accordion.Content active={activeIndex === 3} content={Potency} />
          </Menu.Item>
        </Accordion>
      </Segment>
    )
  }
}
