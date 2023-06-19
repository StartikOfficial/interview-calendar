import React, { useContext } from 'react';
import styled from 'styled-components';
import Flex from './Flex';
import { WeekDatesContext } from '../App';
import toFullDate from '../utils/toFullDate';

const LeftArrow = styled.div`
    width: 14px;
    height: 14px;
    border-left: 3px solid ${props => props.theme.color || "red"};
    border-top: 3px solid ${props => props.theme.color || "red"};
    transform: rotate(-45deg);
    cursor: pointer;
    margin-left: 7px;
`

const RightArrow = styled(LeftArrow)`
    transform: rotate(135deg);
    margin-right: 8px;
    margin-left: 0;
`

const StyledNav = styled.nav`
    position: relative;
    border-top: 2px solid #ebebeb;
    border-bottom: 2px solid #ebebeb;
    background-color: #f6f6f6;
    padding-left: 79px;
    padding-bottom: 19px;
    padding-top: 16px;
    padding-right: 8px;
    height: 145px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 17px;
    >div {
        width: 100%;
        
    }
    .day-date {
        font-size: 28px; 
        position: relative;
        line-height: 28px;
    }
    .day-name {
        font-size: 16px;
        font-weight: 700;
        line-height: 16px;
    }
    .flex-date {
        #date {
            flex-grow: 5;
            height: 100%;
            span {
                font-size: 24px;
                line-height: 24px;
            }
        }
    }
    .flex-week {
        width: calc(100%/7);
    }

    .today-container {
        position: relative;
        color: white;
        span {
            display: block;
            height: 28px;
        }
    }
    .today {
        color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -46%);
        width: 50px;
        height: 50px;
        background-color: ${props => props.theme.color};
        border-radius: 50%;
    }
`

const Nav = ({ setWeekDates }) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const dayNames = ["M", "T", "W", "T", "F", "S", "S"];

    const currentDate = toFullDate(new Date())[0];

    const weekDates = useContext(WeekDatesContext);

    const thisWeekMonth = monthNames[weekDates[3].getMonth()];
    const thisWeekYear = weekDates[3].getFullYear();

    function previousWeek() {
        setWeekDates(weekDates.map(date => {
            const newDate = new Date(date);
            newDate.setDate(date.getDate() - 7);
            return newDate;
        }))

    }

    function nextWeek() {
        setWeekDates(weekDates.map(date => {
            const newDate = new Date(date);
            newDate.setDate(date.getDate() + 7);
            return newDate;
        }))
    }

    return (
        <StyledNav>
            <Flex align="center">
                {weekDates.map((date, i) =>
                (<Flex key={3000 + i} direction="column" gap="19px" className="flex-week">
                    <span className="day-name">{dayNames[i]}</span>
                    {
                    currentDate === toFullDate(date)[0] ?
                        (<div className="today-container">
                            <div className="today"></div>
                            <span className="day-date" key={200 + i}>{date.getDate()}</span>
                        </div>)
                        : (<span className="day-date" key={200 + i}>{date.getDate()}</span>)
                    }
                </Flex>)
                )}
            </Flex>
            <Flex justify="space-between" align="center" className="flex-date">
                <Flex justify="space-around" align="center">
                    <LeftArrow onClick={previousWeek} />
                </Flex>
                <div id='date'>
                    {weekDates ? <span>{`${thisWeekMonth} ${thisWeekYear}`}</span> : ""}
                </div>
                <Flex justify="space-around" align="flex-end">
                    <RightArrow onClick={nextWeek} />
                </Flex>
            </Flex>
        </StyledNav>

    );
}


export default Nav;