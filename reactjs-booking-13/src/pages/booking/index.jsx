import React, { useEffect } from "react";
import {
  bookingTicketAPI,
  getTicketListAPI,
} from "../../redux/actions/booking.action";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useParams } from "react-router-dom";
const useStyles = makeStyles(() => {
  return {
    booked: {
      backgroundColor: "red",
    },
    choice: {
      backgroundColor: "green",
    },
    notBooked: {
      backgroundColor: "pink",
    },
  };
});

export default function Booking() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { code } = useParams();
  const { chairList } = useSelector((state) => state.booking);
  const renderStatusChair = (booked, choice) => {
    if (booked) {
      return classes.booked;
    } else {
      if (choice) {
        return classes.choice;
      } else {
        return classes.notBooked;
      }
    }
  };
  const handleChoice = (maGhe) => {
    dispatch({ type: "CHOICE_CHAIR", payload: maGhe });
  };
  const renderChairList = () => {
    return chairList.map((chair, index) => {
      return (
        <Button
          className={renderStatusChair(chair.daDat, chair.dangChon)}
          variant="contained"
          key={index}
          onClick={() => handleChoice(chair.maGhe)}
        >
          {chair.tenGhe}
        </Button>
      );
    });
  };
  useEffect(() => {
    dispatch(getTicketListAPI(code));
  }, []);
  return (
    <div>
      <h1>Phòng Ghế</h1>
      <div>{renderChairList()}</div>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            const newChairList = chairList
              .filter((chair) => chair.dangChon)
              .map((chair) => ({ maGhe: chair.maGhe, giaVe: chair.giaVe }));
            dispatch(bookingTicketAPI(code, newChairList));
          }}
        >
          Đặt Vé
        </Button>
      </div>
    </div>
  );
}
