import styled from "styled-components"

export const StyledInput = styled.input`
    background-color: ${props => props.theme.inputBg};
    
    border : 2px solid transparent;
    border-radius: 10px;
    
    padding : ${props => props.pd ? props.pd : "5px 10px"};
    margin : ${props => props.mg ? props.mg : "5px"};
    width : ${props => props.mg ? `calc(100% - ${2*props.mg})` : `calc(100% - 10px)`};


    &:focus{
        border-color: ${props => props.theme.middleOrange}
    }
`  