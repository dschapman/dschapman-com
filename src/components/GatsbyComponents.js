import React from 'react';
import {Link} from 'gatsby';
import styled from 'react-emotion'
import {mainTheme,mq} from './../styles/styles'

const Button = styled.button(
  `
  background: ${mainTheme.background};
  color: ${mainTheme.link};
  &:hover {
    text-decoration: underline;
    color: ${mainTheme.linkHover};
  };
  font-weight: 700;
  font-size: 1.125rem;
  border-style: none;
  z-index: 0;
  ${mq[0]}{
    padding:.5rem .75rem .75rem .5rem;
  }
  ${mq[1]}{
    padding: .5rem 1rem 1rem .5rem;
  }
  `
)

const Dropdown = styled.div(

  `background: ${mainTheme.background};
  color: ${mainTheme.link};
  ${mq[0]}{
    font-size: .875rem;
  }
  ${mq[1]} {
    font-size: 1rem;
  };
  `
)

const DropdownList = styled.ul(
  `
  width: 100vw;
  list-style: none; 
  padding: 0;
  background: ${mainTheme.background};
  font-weight: 700;
  position: absolute;
  z-index: 1;
  right: 0;
  left: 0;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08);
  margin: 1px 0 0 1px;
  `
)

const DropdownListItem = styled.li(
  `
  padding: .5rem 1rem 1rem .5rem;
  margin-bottom: 0;
  background: ${mainTheme.accent};
  text-align: center;
  `
)


class GatsbyButton extends React.Component{
constructor(props){
  super(props);
  this.state ={
    buttonName:props.buttonName,
    buttonLink:props.buttonLink,
  };
}
render() {
  return (
    <Link to={this.state.buttonLink}><Button>{this.state.buttonName}</Button></Link>
  )
}
}

class GatsbyDropdown extends React.Component {
constructor(props){
 super(props);

 this.state = {
    dropdownName:props.dropdownName,   
    dropdownLinks:props.dropdownLinks, // Array of Object Literals. Each object has two values, linkName and linkPath
    displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    document.addEventListener('onMouseEnter', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
      document.removeEventListener('onMouseLeave', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <Dropdown onMouseLeave={this.hideDropdownMenu}>
         <Button onClick={this.showDropdownMenu} onMouseEnter={this.showDropdownMenu}> {this.state.dropdownName} </Button>
          { this.state.displayMenu ? (
          <DropdownList>
            {this.state.dropdownLinks.map(dropdownLink => {
              return (
                <DropdownListItem
                  key={dropdownLink.linkPath}
                >
                  <Link to={dropdownLink.linkPath}>
                    {dropdownLink.linkName}
                  </Link>
                </DropdownListItem>
              )
            })} 
          </DropdownList>
        ):
        (
          null
        )
        }

       </Dropdown>

    );
  }
}

export {GatsbyButton, GatsbyDropdown}