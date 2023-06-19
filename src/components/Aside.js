import React from 'react';
import styled from 'styled-components';
import Flex from './Flex';

const StyledAside = styled(Flex)`
font-size: 16px;
color: #c0c0c0;
padding-right: 9px;
padding-left: 17px;
line-height: 16px;
    >*:first-child {
        margin-bottom: 40px;
    }
    >* {
        margin-bottom: 48px;
    }
`

const Aside = (props) => {
    const hours = [];
    for (let i = 0; i < 24; i++) {
        if (i < 10) {
            hours.push(<span key={100+i}>{`0${i}:00`}</span>);
        }
        else {
            hours.push(<span key={100+i}>{`${i}:00`}</span>);
        }
    }
    return (
        <StyledAside direction="column">
            {hours}
        </StyledAside>
    );
}


export default Aside;