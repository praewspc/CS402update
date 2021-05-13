import * as React from 'react';
import { Row, Col } from "react-bootstrap";
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizaitonProvider from '@material-ui/lab/LocalizationProvider';
import DateRangePicker from '@material-ui/lab/DateRangePicker';
import DateRangePickerDay from '@material-ui/lab/DateRangePickerDay';
import clsx from 'clsx';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  highlight: {
    borderRadius: 0,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  firstHighlight: {
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
  },
  endHighlight: {
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
  },
}));

    
export const BlockCreateSchedule = () => {

    const classes = useStyles();
    const [value, setValue] = React.useState([null, null]);
   
    const renderWeekPickerDay = (date, dateRangePickerDayProps) => {
        return (
        <DateRangePickerDay
            {...dateRangePickerDayProps}
            className={clsx(dateRangePickerDayProps.className, {
            [classes.firstHighlight]: dateRangePickerDayProps.isStartOfHighlighting,
            [classes.endHighlight]: dateRangePickerDayProps.isEndOfHighlighting,
            [classes.highlight]: dateRangePickerDayProps.isHighlighting,
            })}
        />
        );
    };

    // let buttonslot1 = document.querySelector('#primary');

    // buttonslot1.addEventListener('click' , () => buttonslot1.style.backgroundColor='#337ab7');

    return (
        <div className="rightblock_Schedule">
            <div className="blockwhite_Schedule">
                <h1 className="Topname_Schedule">Create Schedule</h1>
                <hr className="hr-Schedule"></hr>

                <LocalizaitonProvider dateAdapter={AdapterDateFns}>
                    <DateRangePicker
                        label="date range"
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                        renderDay={renderWeekPickerDay}
                        renderInput={(startProps, endProps) => (
                        <React.Fragment>
                            <TextField {...startProps} variant="standard" />
                            <Box sx={{ mx: 2 }}> to </Box>
                            <TextField {...endProps} variant="standard" />
                        </React.Fragment>
                        )}
                    />
                </LocalizaitonProvider>
                
                <Row className="slottop">
                    <Button
                        className="buttonslot1"
                        variant="outlined"
                        color="primary"
                        type="submit"
                        onclick={onchange}
                        >
                            08:00 - 09:30
                    </Button>

                    <Button
                        className="buttonslot2"
                        variant="outlined"
                        color="primary"
                        type="submit"
                        >
                            09:30 - 11:00
                    </Button>

                    <Button
                        className="buttonslot3"
                        variant="outlined"
                        color="primary"
                        type="submit"
                        >
                            11:00 - 12:30
                    </Button>
                </Row>

                <Row className="slotbottom">
                    <Button
                        className="buttonslot4"
                        variant="outlined"
                        color="primary"
                        type="submit"
                        >
                            13:30 - 15:00
                    </Button>

                    <Button
                        className="buttonslot5"
                        variant="outlined"
                        color="primary"
                        type="submit"
                        >
                            15:00 - 16:30
                    </Button>

                    <Button
                        className="buttonslot6"
                        variant="outlined"
                        color="primary"
                        type="submit"
                        >
                            16:30 - 18:00
                    </Button>
                </Row>
                
            </div>
        </div>

    )
}
