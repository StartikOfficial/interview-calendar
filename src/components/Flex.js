import React from 'react';
import styled from 'styled-components';

const StyledFlex = styled.div`
display:flex;
gap: ${props => props.gap || '0'};
flex-direction: ${props => props.direction || 'row'};
align-items: ${props => props.align || 'stretch'};
justify-content: ${props => props.justify || 'stretch' };
margin: ${({margin}) => margin || '0'};
flex-grow: ${props => props.grow || '1'};

`

const Flex = (props) => {
    return <StyledFlex {...props} />;
}

export default Flex;