import React, {useContext} from 'react';
import styled from 'styled-components';
import Flex from './Flex';
import { WeekDatesContext } from '../App';
import toFullDate from '../utils/toFullDate';

const StyledMain = styled.main`
    display: flex;
    overflow-y: scroll;
    height: calc(100vh - 128px - 146px - 80px);
    &::-webkit-scrollbar {
        width: 0;
    }
`

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns:${props => props.columns || "repeat(7, 1fr)"};
    grid-template-rows: ${props => props.rows || "repeat(24, 1fr)"};
    min-height: 200px;
    width: 100%;
    grid-auto-flow: column;

    >* {
        border: 1px solid #e6e6e6;
        height: 64px;
        padding: 2px;
        border-left: none;
    }
    >*:nth-child(24n+1) {
        border-top: none;
    }
    >*:nth-child(24n) {
        border-bottom: none;
    }
    >*:nth-child(n+145) {
        border-right: none;
    }
    >*:nth-child(n+25) {
        border-left: 1px solid #e6e6e6;
    }
`

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
const StyledEvent = styled.div`
    background-color: #ebecff;
    width: 100%;
    height: 100%;
    cursor: pointer;
`

const Event = ({interview, setDeleteButton}) => {
    
    const handleEventClick = () => {
        setDeleteButton([true, interview]);
      };

    return (
        <StyledEvent onClick={handleEventClick}/>
    )
}

const Aside = () => {
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
};

const Main = ({interviews, setDeleteButton}) => {
    const spans = [];
    const weekDates = useContext(WeekDatesContext);
    const weekDatesFull = weekDates.map(date => toFullDate(date));

    const crossingDates = interviews.reduce((acc, interview) => {
        if (weekDatesFull.some(date => date[0] === interview[0])) {
          acc.push(interview);
        }
        return acc;
      }, []);

    let crossingDatesIndex = 0;

    for (let i = 0; i <= 167; i++) {
        const index = Math.floor(i / 24);
        const hour = (i % 24);
        if (crossingDates.length > 0 && crossingDates.length > crossingDatesIndex) {
            if (hour === parseInt(crossingDates[crossingDatesIndex][1].slice(0, 2)) && crossingDates[crossingDatesIndex][0] === weekDatesFull[index][0]) {
                spans.push(<span key={1000+i}>{<Event setDeleteButton={setDeleteButton} interview={crossingDates[crossingDatesIndex]}/>}</span>);
                crossingDatesIndex++;
    
                continue;
            }
        }
        spans.push(<span key={1000+i}></span>);
    }

    return (
        <StyledMain>
            <Aside/>
            <StyledGrid>
                {spans}
            </StyledGrid>
        </StyledMain>
        
    );
  };

export default Main;