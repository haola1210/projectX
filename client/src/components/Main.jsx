import React from 'react';
import { StyledInput } from "../styles/StyledInput"
import { StyledButton } from "../styles/StyledButton"

function Main(props) {
    return (
        <div>
            <StyledInput placeholder="Type something..."/>
            <StyledButton>
                Click
            </StyledButton>
        </div>
    );
}

export default Main;