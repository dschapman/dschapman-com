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
    max-width: 24rem;
    border-radius: .25rem;
    overflow: hidden;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 2rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 1rem;
    padding-bottom: 2rem;
    ${mq[0]} {
        padding-left: .5rem;
        padding-right: .5rem;
        padding-bottom:.5rem;
        padding-top:.25rem;
    }
    ${mq[1]} {
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top:.5rem;
        padding-bottom:1rem;
    }
    ${mq[2]}{
        padding-left: 1.5rem;
        padding-right:1.5rem;
        padding-bottom: 2rem;
        padding-top: 1rem;
    }
    props : ${props => ({background: props.background})};
`

const PoemTitle = styled('div')`
    font-weight: 700;
    text-align: center;
    font-size: 1.5rem;
    padding-bottom: 1rem;
`

const PoemText = styled('div')`
    font-size:1rem;
    ${mq[0]}{
        font-size: .75rem;
    },
    ${mq[1]}{
        font-size: .875rem;
    },
    ${mq[2]}{
        font-size: 1rem;
    }
`



export default Poem