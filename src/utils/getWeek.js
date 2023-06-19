export default function getCurrentWeek() {
    const day = new Date();
    const monday = new Date(day);
    const dayOfWeek = day.getDay() - 1; 
    monday.setDate(day.getDate() - dayOfWeek);
    
    const datesOfWeek = [];
    for (let i = 0; i < 7; i++) {
        const date = new Date(monday);
        date.setDate(monday.getDate() + i);
        datesOfWeek.push(date);
    }
    return datesOfWeek;
  }

