import React, {Component} from 'react'
import styled from "@emotion/styled"
import {mq} from "./styles"

class Poem extends React.Component {

    constructor(props){
        super(props);
        this.state ={
          title:props.title,
          children:props.children,
          bg:props.bg,
          align:props.align,
        };
      }
    

    render (){
            return(
            <PoemCard background={this.state.bg}>
                <PoemTitle>{this.state.title}</PoemTitle>
                <PoemText style={{textAlign: this.state.align}}>{this.state.children}</PoemText>
            </PoemCard>
        )
    }
}

const PoemCard = styled('div')`
    
    border-radius: .25rem;
    overflow: hidden;
    
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 1rem;
    padding-top: 1rem;
    props : ${props => ({background: props.background})};
`

const PoemTitle = styled('H2')`
    text-align: left;
    margin-bottom: 20px;
`

const PoemText = styled('div')`
    white-space: pre-line;
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    padding-bottom: 2rem;
    ${mq[0]} {
        padding-left: .5rem;
        padding-right: .5rem;
        padding-bottom:.5rem;
    }
    ${mq[1]} {
        padding-left: 1rem;
        padding-right: 1rem;
        padding-bottom:1rem;
    }
    ${mq[2]}{
        padding-left: 1.5rem;
        padding-right:1.5rem;
        padding-bottom: 1rem;
    }

    // ${mq[0]}{
    //     font-size: .75rem;
    // },
    // ${mq[1]}{
    //     font-size: .875rem;
    // },
    // ${mq[2]}{
    //     font-size: 1rem;
    // }
`



export default Poem