import React, {useEffect} from 'react';
import moment from 'moment';
import { Card, CardContent, Table, TableHead, TableBody,TableRow, TableCell } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';

function Body({calendar, setCalendar, value, setValue}) {
    // Variabel Hari Pertama dan Hari terakhir Di bulan saat ini
    const startDay = value.clone().startOf('month').startOf('week');
    const endDay = value.clone().endOf('month').endOf('week');
    
    // Load Data Untuk Menghindari re-render ( karena ini merender tanggal )
    useEffect(() => {
        const day = startDay.clone().subtract(1,"day");
        // temporary variable
        // Untuk ngambil tanggal tiap baris / cell
        const temporary = [];
        while(day.isBefore(endDay, "day")){
        temporary.push(
            Array(7)
            .fill()
            .map(()=>day.add(1,"day").clone())
        );
        }
        setCalendar(temporary);
    }, [value]);

    // Pemanggilan Hari
    let weekDay = moment.weekdaysShort();

    // Styleing Tanggal
    const isSelected = (day, value) =>{
        return value.isSame(day, "day");
    }
    const beforeToday = (day, value) =>{
        return day.isBefore(day, "day");
    }
    const isToday = (day) =>{
        return day.isSame(new Date(), "day");
    }

    const dayStyle = (day, value) =>{
        if(beforeToday(day, value)) return "before"
        if(isSelected(day, value)) return "selected"
        if(isToday(day)) return "today"
        return ""
    }

    // Styleing Root (Card)
    const useStyles = makeStyles({
        root: {
            minWidth: 275,
            marginTop: 10,
            marginBottom: 10,
        },
    });

    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <TableContainer component={Paper}>
                    <Table size="small" className="body-cal">
                        <TableHead className="hari">
                            <TableRow>
                                {
                                    weekDay.map((weekdays) => (
                                        <TableCell className={weekdays} key={weekdays}>{weekdays}</TableCell>
                                    ))
                                } 
                            </TableRow>
                        </TableHead>

                        <TableBody className="tanggal">
                            {
                                calendar.map((week) => (
                                <TableRow>
                                    {
                                    week.map((day) => (
                                        <TableCell onClick={() => setValue(day)} className={"day_" + dayStyle(day,value)}>{day.format("D")}</TableCell>
                                    ))
                                    }
                                </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    )
}

export default Body
