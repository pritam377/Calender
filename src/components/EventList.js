import React from "react";
import {useState} from "react";
import "../styles.css";

const EventList = () => {
//   return (
//     <div>
//       <div className="event-list-cal">
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-evenly",
//           }}
//         >
//           <h3>EVENT LIST</h3>
//           <div style={{ display: "flex", alignItems: "center" }}>
//             <div className="orange-box"></div>
//             <p>Past Events</p>
//           </div>
//           <div style={{ display: "flex" }}>
//             <div className="purple-box"></div>
//             <p>Upcoming Events</p>
//           </div>
//         </div>
//         <div className="event-name">Event 1 </div>
//         <div className="event-name">Christmas Day</div>
//         <div className="event-name">Office Picnic</div>
//         <div className="event-name2">John's Meeting</div>
//         <div className="event-name2">Subhashree Birthday</div>
//         <div className="event-name2">New Year Eve</div>
       
//       </div>
//     </div>
//   );
const [events, setEvents] = useState([
    { id: 1, name: 'Christmas Day', date: '2023-12-25' },
    { id: 2, name: 'Office Picnic', date: '2023-12-27' },
    { id: 3, name: 'John\'s Meeting', date: '2023-12-29' },
    { id: 4, name: 'Subhashree\'s Birthday', date: '2023-28-01' },
    { id: 5, name: 'New Year 2024', date: '2024-01-01' },
 ]);

 const [filter, setFilter] = useState('');

 const filteredEvents = events.filter(event => event.name.toLowerCase().includes(filter.toLowerCase()));

 const addEvent = () => {
    const newEvent = { id: events.length + 1, name: 'New Event', date: '2024-01-01' };
    setEvents([...events, newEvent]);
 };

 const deleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
 };

 return (
    <div className="App">
      <h1 style ={{ marginLeft:"15px"}}>Event List</h1>
      <div style={{ display: "flex", alignItems: "center" }}>
            <div className="orange-box"></div>
            <p>Past Events</p>
          </div>
          <div style={{ display: "flex" }}>
            <div className="purple-box"></div>
            <p>Upcoming Events</p>
          </div>
     
      <button onClick={addEvent}>Add Event</button>
      <ul>
        {filteredEvents.map(event => (
          <li key={event.id}>
            {event.name} - {event.date}
            <button onClick={() => deleteEvent(event.id)} style={{marginLeft:"10px"}}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
 )
};

export default EventList;
