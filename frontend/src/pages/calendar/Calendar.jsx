import React from 'react'
import PageTitle from '../../components/PageTitle'
import EventCalendar from './EventCalendar'

function Calendar() {
  return (
    <div >
    <PageTitle activeMenu="Calendar" motherMenu="App" />

    <EventCalendar />
    </div>
  )
}

export default Calendar
