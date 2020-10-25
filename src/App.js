import React, {useState} from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import moment from 'moment';
import './App.css';

function App() {

  //! Statenya
  // const [currentDate, setCurrentDate] = useState(new Date());
  // const [selectedDate, setSelectedDate] = useState(new Date());
  // const dateFormat = "MMMM YYYY"

  // Matrik Calendar 
  const [calendar, setCalendar] = useState([]);
  // Value / Isi Calendar
  const [value, setValue] = useState(moment());

  // const startDay = value.clone().startOf('month').startOf('week');
  // const endDay = value.clone().endOf('month').endOf('week');
  
  // useEffect(() => {
  //   const day = startDay.clone().subtract(1,"day");
  //   // temporary variable
  //   const temporary = [];
  //   while(day.isBefore(endDay, "day")){
  //     temporary.push(
  //       Array(7)
  //       .fill()
  //       .map(()=>day.add(1,"day").clone())
  //     );
  //   }
  //   setCalendar(temporary);
  // }, [value]);

  // * nampilin Hari
  // const bulan = ['Sun', 'Mon', 'Tue'];
  // let weekDay = moment.weekdaysShort();
  // let listMonth = moment.months();


  //* Function
  // const nextMonth = () =>{
  //   // setCurrentDate(moment(currentDate).add(1,'M'));
  //   return value.clone().add(1,"M");
  // }
  // const prevMonth = () =>{
  //   // setCurrentDate(moment(currentDate).subtract(1,'M'));
  //   return value.clone().subtract(1,"M");
  // }

  // const currentMonth = () =>{
  //   return value.format("MMMM");
  // }

  // const currentYear = () =>{
  //   return value.format("YYYY");
  // }

  // const handleChangeMonth = (e) => {
  //   // return (value.set('month', e.target.value));
  //   const newMonth = value.clone().set('month',e.target.value);
  //   setValue(newMonth);
  //   e.preventDefault();
  // }

  // const handleChangeYear = (e) => {
  //   const yearChange = value.clone().set('year', e.target.value);
  //   setValue(yearChange);
  //   e.preventDefault();
  // }

  // const isSelected = (day, value) =>{
  //   return value.isSame(day,"day");
  // }
  // const beforeToday = (day) =>{
  //   return day.isBefore(new Date(), "day");
  // }
  // const isToday = (day) =>{
  //   return day.isSame(new Date(), "day");
  // }

  // const dayStyle = (day, value) =>{
  //   if(beforeToday(day)) return "before"
  //   if(isSelected(day, value)) return "selected"
  //   if(isToday(day)) return "today"
  //   return ""
  // }

  return (
    <div className="App">

{/* head calendar */}
      <Header value={value} setValue={setValue} />
      {/* <div className="header-cal">
        <button onClick={() => setValue(prevMonth)}>Prev</button>
          <p className="title-cal">{currentMonth()} {currentYear()}</p>
        <button onClick={() => setValue(nextMonth)}>Next</button>
      </div> */}

{/* hari dan tanggal */}
      <Body calendar={calendar} setCalendar={setCalendar} value={value} setValue={setValue} />
      {/* <table className="body-cal">
        <thead className="hari">
        {
          weekDay.map((weekdays) => (
            <th className={weekdays} key={weekdays}>{weekdays}</th>
          ))
        } 
        </thead>
        <tbody className="tanggal">
          {
            calendar.map((week) => (
              <tr>
                {
                  week.map((day) => (
                    <td onClick={() => setValue(day)} className={"day_" + dayStyle(day,value)}>{day.format("D")}</td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table> */}

      {/* isi calendar */}
      {/* <div className="calendar">
        {
          calendar.map((week) => <div>
            {
              week.map((day)=> (
              <div className="day" onClick={()=> setValue(day)}>
                <div className={dayStyle(day, value)}>{day.format("D")}</div>
              </div>
              ))
            }
          </div>)
        }
      </div> */}

    {/* Input */}
    <Footer value={value} setValue={setValue} />
      {/* <form className="input-cal">
        <label>Jump To: </label>
        <select className="month" value={currentMonth()} onChange={handleChangeMonth}>
          {
            listMonth.map((months) =>(
              <option key={months}>{months}</option>
            ))
          }
        </select>
        <select className="year" value={currentYear()} onChange={handleChangeYear}>
          <option value="2010">2010</option>
          <option value="2011">2011</option>
          <option value="2012">2012</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
        </select>
      </form> */}

    </div>
  );
}

export default App;
