import React, { useState, useEffect } from "react";
import { Col, Row, Card } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import Alert from "sweetalert2";
import axios from "axios";
import frLocale from '@fullcalendar/core/locales/fr'; // Import French locale

const EventCalendar = () => {
  const [calendarEvents, setCalendarEvents] = useState([]);

  useEffect(() => {
    // Fetch events from MongoDB using Axios
    axios.get("/api/events")
      .then((response) => {
        setCalendarEvents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);

  const eventClick = (eventClick) => {
    Alert.fire({
      title: eventClick.event.title,
      html: `
        <div className="table-responsive">
          <table className="table">
            <tbody>
              <tr>
                <td>Title</td>
                <td><strong>${eventClick.event.title}</strong></td>
              </tr>
              <tr>
                <td>Start Time</td>
                <td><strong>${eventClick.event.start}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Close",
    });
  };

  return (
    <div className="animated fadeIn demo-app">
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Body>
              <div className="demo-app-calendar" id="mycalendartest">
                <FullCalendar
                  defaultView="dayGridMonth"
                  headerToolbar={{
                    start: "prev,next today",
                    center: "title",
                    end: "dayGridMonth,timeGridWeek,timeGridDay",
                  }}
                  rerenderDelay={10}
                  eventDurationEditable={false}
                  editable={false}
                  droppable={false}
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                  weekends={true}
                  events={calendarEvents}
                  eventClick={eventClick}
                  locales={[frLocale]} // Set French locale
                  locale="fr" // Set French as the default locale
                  slotMinTime="08:00:00" // Set the minimum time slot to 8:00 AM
                  slotMaxTime="18:00:00" // Set the maximum time slot to 5:00
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default EventCalendar;
