import React from 'react';
import styled from 'styled-components';


const StyledPlus = styled.div`
  --b: ${props => props.thickness || "3px"}; 
  width: ${props => props.size || "25px"}; 
  aspect-ratio: 1;
  background:
    conic-gradient(from 90deg at var(--b) var(--b),transparent 90deg, ${props => props.theme.color} 0) 
    calc(100% + var(--b)/2) calc(100% + var(--b)/2)/
    calc(50%  + var(--b))   calc(50%  + var(--b));
  display: inline-block;
  cursor: pointer;
`

const Plus = (props) => {
    return <StyledPlus {...props}/>;
}

export default Plus;