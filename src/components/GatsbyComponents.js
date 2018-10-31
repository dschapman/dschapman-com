import React from 'react';
import {Link} from 'gatsby';
import styled from 'react-emotion'
import '../styles/stylesheet.css';

const Button = styled.button(
  tw`bg-red text-white font-bold py-2 px-8 border-none`
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
    <Button> <Link style={{color:"white"}} to={this.state.buttonLink}>{this.state.buttonName}</Link> </Button>
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
        <div  className="dropdown" onMouseLeave={this.hideDropdownMenu} style = {{background:"red"} } >
         <Button onClick={this.showDropdownMenu} onMouseEnter={this.showDropdownMenu}> {this.state.dropdownName} </Button>
          { this.state.displayMenu ? (
          <ul className={"dropdown-list"}>
            {this.state.dropdownLinks.map(dropdownLink => {
              return (
                <li
                  key={dropdownLink.linkPath} className={"dropdown-list-item"}
                >
                  <Link to={dropdownLink.linkPath}>
                    {dropdownLink.linkName}
                  </Link>
                </li>
              )
            })} 
          </ul>
        ):
        (
          null
        )
        }

       </div>

    );
  }
}

export {GatsbyButton, GatsbyDropdown}