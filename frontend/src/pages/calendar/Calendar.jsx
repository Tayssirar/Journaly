import React from 'react'
import PageTitle from '../../components/PageTitle'
import EventCalendar from './EventCalendar'

function Calendar() {
  return (
    <div >
    <PageTitle activeMenu="Calendrier générale" motherMenu="Calendrier" />

    <EventCalendar />
    </div>
  )
}

export default Calendar
