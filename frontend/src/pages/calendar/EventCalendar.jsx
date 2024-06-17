import React, { useState, useEffect } from "react";
import { Col, Row, Card } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Alert from "sweetalert2";
import frLocale from '@fullcalendar/core/locales/fr'; // Import French locale

const EventCalendar = () => {
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [customEvents, setCustomEvents] = useState([
    {
      title: "Rendre des devoirs (Niveau 1)",
      start: new Date("2024-06-12"),
      end: new Date("2024-06-12")
    },
    {
      title: "Rendre des devoirs (Niveau 2)",
      start: new Date("2024-06-13"),
      end: new Date("2024-06-13")
    },
    {
      title: "Rendre des devoirs (Niveau 3)",
      start: new Date("2024-06-14"),
      end: new Date("2024-06-14")
    },
    {
      title: "مجالس الأقسام (Réunion des sections)",
      start: new Date("2024-06-24"),
      end: new Date("2024-06-24")
    },
    {
      title: "Concours national 6ème année",
      start: new Date("2024-06-21"),
      end: new Date("2024-06-23")
    },
    {
      title: "Fête de fin d'année scolaire",
      start: new Date("2024-06-27"),
      end: new Date("2024-06-27")
    }
  ]); // State for custom events from static data

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Fetch national events from Google Calendar (commented out for this example)
        // const response = await axios.get("https://www.googleapis.com/calendar/v3/calendars/en.tn.official%23holiday@group.v.calendar.google.com/events?key=YOUR_API_KEY");
        // const formattedEvents = response.data.items.map((event) => ({
        //   title: event.summary,
        //   start: new Date(event.start.date), // Convert date string to Date object
        //   end: new Date(event.end.date), // Convert date string to Date object
        // }));
        // setCalendarEvents(formattedEvents);

        // In this example, we're only using static custom events
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const eventClick = (eventClick) => {
    Alert.fire({
      title: eventClick.event.title,
      html: `
        <div className="table-responsive">
          <table className="table">
            <tbody>
              <tr>
                <td>Titre</td>
                <td><strong>${eventClick.event.title}</strong></td>
              </tr>
              <tr>
                <td>Heure de début</td>
                <td><strong>${eventClick.event.start}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Fermer",
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
                  events={[...calendarEvents, ...customEvents]} // Combine national and custom events
                  eventClick={eventClick}
                  locales={[frLocale]} // Set French locale
                  locale="fr" // Set French as the default locale
                  slotMinTime="08:00:00" // Set the minimum time slot to 8:00 AM
                  slotMaxTime="18:00:00" // Set the maximum time slot to 5:00 PM
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
