import React from 'react';
import styled from 'styled-components';

let StyledContainer = styled.div`
max-width: ${props => props.width || "740px"};
height: ${props => props.height || "100vh"};
margin: ${props => props.margin || "0 auto"};
overflow: hidden;
`

const Container = (props) => {
    return (
    <StyledContainer {...props}/>
    );
}

export default Container;