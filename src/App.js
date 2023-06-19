import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import Container from './components/Container';
import { createContext, useState } from 'react';

export const WeekDatesContext = createContext([]);

function App() {
  const [interviews, setInterviews] = useState([]);

  const [currentWeek] = useState(getWeek());
  
  const [weekDates, setWeekDates] = useState(currentWeek);

  const [deleteButton, setDeleteButton] = useState([false, null]);

  function getWeek() {
    const day = new Date();
    const monday = new Date(day);
    const dayOfWeek = day.getDay() === 0 ? 6 : day.getDay() - 1;
    monday.setDate(day.getDate() - dayOfWeek);
  
    const datesOfWeek = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(monday);
      date.setDate(monday.getDate() + i);
      datesOfWeek.push(date);
    }
    return datesOfWeek;
  }

  return (
    <WeekDatesContext.Provider value={weekDates}>
      <Container>

        <Header 
        interviews={interviews} 
        setInterviews={setInterviews}/>

        <Nav setWeekDates={setWeekDates}/>

        <Main
        setDeleteButton={setDeleteButton}
        interviews={interviews}/>

        <Footer 
        interviews={interviews} 
        setInterviews={setInterviews} 
        currentWeek={currentWeek} 
        setWeekDates={setWeekDates}
        deleteButton={deleteButton}
        setDeleteButton={setDeleteButton}/>

      </Container>
    </WeekDatesContext.Provider>  
  );
}

export default App;
