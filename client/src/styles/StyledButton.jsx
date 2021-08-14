import styled from "styled-components"

export const StyledButton = styled.button`
    border : 2px solid transparent;
    border-radius: 10px;

    background-color: ${props => props.theme.middleOrange};
    padding : ${props => props.pd ? props.pd : "5px 10px"};
    margin : ${props => props.mg ? props.mg : "5px"};

    font-weight : bold;
    color : ${props => props.theme.darkGray};

    &:hover{
        color : black;
    }

    &:active{
        border-color: ${props => props.theme.orange};
        color : black;
    }
`