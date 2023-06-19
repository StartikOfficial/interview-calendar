import React from 'react';
import styled from 'styled-components';
import Flex from './Flex';
import Plus from './Plus';

const StyledHeader = styled.header`
margin: 0 50px 0 47px;
height: 128px;
padding-bottom: 4px;
h1 {
    font-size: 35px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: -0.01rem;
}
&>div {
    width: 100%;
    height: 100%;
}
`

const Header = ({setInterviews}) => {
    function addInterview() {
        const dateTimeString = window.prompt("Enter event time: YYYY-MM-DD HH:mm:ss", "");
        const dateTimeRegex = /^(\d{4})-(\d{2})-(\d{2})\s(\d{2}):(\d{2}):(\d{2})$/;

        if (dateTimeString === null || dateTimeString === "") {
            return alert("User cancelled");
        }
        if (!dateTimeRegex.test(dateTimeString)) {
            return alert("Wrong format");
        }

        const [, year, month, day, hours, minutes, seconds] = dateTimeString.match(dateTimeRegex);

        if (year < 1 || month < 1 || month > 12 || day < 1 || day > 31 || hours < 0 || hours > 23 || minutes < 0 || minutes > 59 || seconds < 0 || seconds > 59) {
            return alert("There is no date with this prompt");
        }

        setInterviews(prev => {
            let [date, time] = dateTimeString.split(" ");
            time = time.slice(0,2)+":00";
            const alreadyExists = prev.some(interview => interview[0] === date && interview[1] === time);
            
            if (alreadyExists) {
              return prev;
            }
            
            return [...prev, [date, time]].sort((a, b) => {
              const dateA = new Date(a[0] + "T" + a[1]);
              const dateB = new Date(b[0] + "T" + b[1]);
              return dateA - dateB;
            });
          });
    };

    return (
        <StyledHeader>
            <Flex justify="space-between" align="center">
                <h1>Interview Calendar</h1>
                <Plus onClick={addInterview} />
            </Flex>
        </StyledHeader>
    );

}

export default Header;
