import React, {Component} from 'react'
import {css} from "react-emotion"
import styled from "react-emotion"
import {H2} from '../styles/StyledComponents'

const PoemCard = styled.div(
    tw`max-w-sm rounded overflow-hidden shadow-lg mx-auto mb-8`,
    props => ({background: props.background})
)

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

                <div className={css(tw` px-6 py-4 xs:px-2 xs:py-1 sm:px-4 sm:py-2 md:px-6 md:py-4 `)}>
                <div className={css(tw` font-bold text-center text-2xl pb-4`)}>{this.state.title}</div>
                <div className={css(tw` text-base xs:text-xs sm:text-sm md:text-base lg:text-base xl:text-base`)} style={{textAlign: this.state.align}}>{this.state.children}</div>
                
                </div>
            
            </PoemCard>
        )
    }
}

export default Poem