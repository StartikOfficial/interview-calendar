import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
background-color: #f6f6f6;
height: 80px;
display: flex;
justify-content:space-between;
align-items: center;
padding: 0 48px;
border-top: 2px solid #e6e6e6;


button, button:active, button:focus {
    background: none;
    appearance: none;
    text-decoration: none;
    outline: 0;
    border: none;
    color: ${props => props.color || props.theme.color};
    cursor: pointer;
    font-size: 28px;
    line-height: 28px;
    letter-spacing: 1px;
}
`

const Footer = ({deleteButton, currentWeek, setWeekDates, setDeleteButton, interviews, setInterviews}) => {
    function deleteEvent() {
        const deleteIndex = interviews.indexOf(deleteButton[1]);
        const newInterviews = interviews.filter((interview, index) => index !== deleteIndex);
        setInterviews(newInterviews);
        setDeleteButton([false, null]);
    }

    function returnToToday() {
        setWeekDates(currentWeek);
    }

    return (
    <StyledFooter>
        <button onClick={returnToToday}>Today</button>
        {deleteButton[0] ? <button onClick={deleteEvent}>Delete</button> : ""}
    </StyledFooter>
    );
}

export default Footer;