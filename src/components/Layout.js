import React from "react"
import Header from '../components/Header'
import {Content,Body} from '../components/StyledComponents'
import {Social} from '../components/social'

class Layout extends React.Component{
    constructor(props){
        super(props);
        this.state ={
          title:props.title,
          children:props.children,
          description:props.description,
          image:props.image,
          path:props.path,
        };
      }
render (){
    return (
        <Body>
            <Header title={this.state.title} path={this.state.path} description={this.state.description} image={this.state.image}/> 
            <Content>
            {this.state.children}
            <Social/>
            </Content>
        </Body>
    )
}
}
export default Layout