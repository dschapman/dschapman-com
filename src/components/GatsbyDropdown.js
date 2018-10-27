import React from 'react';
import {Link} from 'gatsby';
import './style.css';


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
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div  className="dropdown" style = {{background:"red",width:"200px"}} >
         <div className="button" onClick={this.showDropdownMenu}> {this.state.dropdownName} </div>
          { this.state.displayMenu ? (
          <ul>
            {this.state.dropdownLinks.map(dropdownLink => {
              return (
                <li
                  key={dropdownLink.linkPath}
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

export default GatsbyDropdown;