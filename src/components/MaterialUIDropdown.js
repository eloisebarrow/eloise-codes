import React from 'react';
import { Link } from 'react-router-dom';
import './MaterialUIDropdown.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dropdownOpen: false
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  onMouseEnter = () => {
    this.setState({dropdownOpen: true});
  }

  onMouseLeave = () => {
    this.setState({dropdownOpen: false});
  }

  render() {
    return (
      <>
      <Button color="danger">Danger!</Button>
      <Dropdown 
        className="d-inline-block" 
        onMouseOver={this.onMouseEnter} 
        onMouseLeave={this.onMouseLeave} 
        isOpen={this.state.dropdownOpen} 
        toggle={this.toggle}
        color={'black'}>
        <DropdownToggle caret>
          Select a borough
        </DropdownToggle>
        <DropdownMenu>
          {/* <DropdownItem divider /> */}
          {/* <DropdownItem header>Header</DropdownItem> */}
          {/* <DropdownItem disabled>Action</DropdownItem> */}
          <DropdownItem><Link to="/bronx">Bronx</Link></DropdownItem>
          <DropdownItem><Link to="/brooklyn">Brooklyn</Link></DropdownItem>
          <DropdownItem><Link to="/manhattan">Manhattan</Link></DropdownItem>
          <DropdownItem><Link to="/queens">Queens</Link></DropdownItem>
          <DropdownItem><Link to="/staten-island">Staten Island</Link></DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
    );
  }
}