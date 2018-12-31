import React from 'react';
import {Link} from 'gatsby';
import styled from 'react-emotion'

const Button = styled.button(
  tw`bg-white text-blue text-lg hover:text-blue-dark hover:underline font-bold py-2 px-4 border-none text-base xs:px-3 sm:px-4`
)

const Dropdown = styled.div(
  tw`bg-white text-base xs:text-sm`
)

const DropdownList = styled.ul(
  tw`list-reset w-screen pin-x mx-0 my-px bg-white font-bold absolute shadow-md z-1`
)

const DropdownListItem = styled.li(
  tw`py-2 px-4 mb-0 hover:bg-grey-lightest text-center text-sm hover:underline`
)

const S_Link = styled(Link)`
  ${tw`text-blue hover:text-blue-dark hover:underline`}
`

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
    <Button> <S_Link to={this.state.buttonLink}>{this.state.buttonName}</S_Link> </Button>
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
                  <S_Link to={dropdownLink.linkPath}>
                    {dropdownLink.linkName}
                  </S_Link>
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

export {GatsbyButton, GatsbyDropdown, S_Link}