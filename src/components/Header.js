import React from 'react';
import {Button} from '@material-ui/core';

function Header({value, setValue}) {

    // fungsi Bulan Selanjutnya
    const nextMonth = () =>{
        // setCurrentDate(moment(currentDate).add(1,'M'));
        return value.clone().add(1,"M");
    }
    
    // fungsi Bulan Sebelumnya
    const prevMonth = () =>{
        // setCurrentDate(moment(currentDate).subtract(1,'M'));
        return value.clone().subtract(1,"M");
    }

    // Bulan Saat ini
    const currentMonth = () =>{
        return value.format("MMMM");
    }
    
    // Tahun Saat ini
    const currentYear = () =>{
        return value.format("YYYY");
    }
    
    return (
        <div className="header-cal">
            <Button variant="contained" color="primary" onClick={() => setValue(prevMonth())}>Prev</Button>
            <p className="title-cal">{currentMonth()} {currentYear()}</p>
            <Button variant="contained" color="primary" onClick={() => setValue(nextMonth())}>Next</Button>
        </div>
    )
}

export default Header
