import React from 'react';
import moment from 'moment';

function Footer({value , setValue}) {

    // List Bulan
    let listMonth = moment.months();

    // bulan Saat ini
    const currentMonth = () =>{
        return value.format("MMMM");
    }
    
    // tahun Saat ini
    const currentYear = () =>{
        return value.format("YYYY");
    }
    
    // fungsi Handle Setiap Bulan Berubah
    const handleChangeMonth = (e) => {
        // return (value.set('month', e.target.value));
        const newMonth = value.clone().set('month',e.target.value);
        setValue(newMonth);
        e.preventDefault();
    }
    
    // Fungsi Handle Setiap Tahun Berubah
    const handleChangeYear = (e) => {
        const yearChange = value.clone().set('year', e.target.value);
        setValue(yearChange);
        e.preventDefault();
    }

    return (
        <form className="input-cal">
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
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
            </select>

        </form>
    )
}

export default Footer
