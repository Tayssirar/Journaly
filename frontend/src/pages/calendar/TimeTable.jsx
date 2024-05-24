import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Card } from 'react-bootstrap';
import frLocale from '@fullcalendar/core/locales/fr';
import axios from 'axios';

const TeacherTimetable = () => {
  const [events, setEvents] = useState([
    {
      "title": "Teaching",
      "start": "2024-05-22T08:00:00",
      "end": "2024-05-22T10:00:00"
    },
    // more events
  
  ]);

  useEffect(() => {
    // Fetch events from the backend
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/api/events'); // Replace with your backend endpoint
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="animated fadeIn demo-app">
      <Card>
        <Card.Body>
          <div className="demo-app-calendar" id="mycalendartest">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin]}
              initialView="timeGridWeek"
              slotMinTime="08:00:00"
              slotMaxTime="18:00:00"
              events={events}
              locales={[frLocale]}
              locale="fr"
              allDaySlot={false}
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay',
              }}
            />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TeacherTimetable;
