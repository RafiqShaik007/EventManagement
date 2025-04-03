import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./styles/addEvent.css";

const AddEvent = () => {
  // {
  //     "event_name": "",
  //     "event_date": "",
  //     "event_time": "",
  //     "venue": "",
  //     "organizer_name": "",
  //     "organizer_contact": "",
  //     "event_description": "",
  //   "event_image": ""
  //   }

  let [event_name, setEvent_name] = useState();
  let [event_date, setEvent_date] = useState();
  let [event_time, setEvent_time] = useState();
  let [venue, setVenue] = useState();
  let [organizer_name, setOrganizer_name] = useState();
  let [organizer_contact, setOrganizer_contact] = useState();
  let [event_description, setEvent_description] = useState();
  let [event_image, setEvent_image] = useState();

  let navigate = useNavigate();

  let event_nameData = (a) => {
    setEvent_name(a.target.value);
  };

  let event_dateData = (b) => {
    setEvent_date(b.target.value);
  };

  let event_timeData = (c) => {
    setEvent_time(c.target.value);
  };

  let venueData = (d) => {
    setVenue(d.target.value);
  };

  let organizer_nameData = (d) => {
    setOrganizer_name(d.target.value);
  };
  let organizer_contactData = (d) => {
    setOrganizer_contact(d.target.value);
  };
  let event_descriptionData = (d) => {
    setEvent_description(d.target.value);
  };
  let event_imageData = (d) => {
    setEvent_image(d.target.value);
  };

  let print = (e) => {
    e.preventDefault();
    console.log('Event Data: ', event_name, event_date, event_time, venue, organizer_name, organizer_contact, event_description, event_image,)
    axios
      .post("http://localhost:8080/api/event/addEvent", {
        event_name,
        event_date,
        event_time,
        venue,
        organizer_name,
        organizer_contact,
        event_description,
        event_image,
      })
      .then((res) => {
        console.log("Response: ", res);
        alert(res.data.message);
        if (res.data.status === true) {
          alert("Event is Successfully Added");
        }
      })
      .catch(() => {
        console.log("Some Error Occured in React Register");
      });
  };

  return (
    // <div id="register">
    //     <form action="">
    //         <div className="head">
    //             ADD EVENT FORM
    //         </div>
    //         <div className="body">

    //         <div className="inp">
    //             <label >Event Name</label>
    //             <input type="text" value={event_name} onChange={event_nameData} />
    //         </div>

    //         <div className="inp">
    //             <label >Event Date</label>
    //             <input type="text"  value={event_date} onChange={event_dateData} />
    //         </div>
    //         <div className="inp">
    //             <label >Event Time</label>
    //             <input type="text" value={event_time} onChange={event_timeData} />
    //         </div>
    //         <div className="inp">
    //             <label >Venue</label>
    //             <input type="text" value={venue} onChange={venueData} />
    //         </div>
    //         <div className="inp">
    //             <label >Oganizer Name</label>
    //             <input type="text" value={organizer_name} onChange={organizer_nameData} />
    //         </div>
    //         <div className="inp">
    //             <label >Oganizer Contact</label>
    //             <input type="text" value={organizer_contact} onChange={organizer_contactData} />
    //         </div>
    //         <div className="inp">
    //             <label >Event Description</label>
    //             <input type="text" value={event_description} onChange={event_descriptionData} />
    //         </div>
    //         <div className="inp">
    //             <label >Event Image</label>
    //             <input type="text" value={event_image} onChange={event_imageData} />
    //         </div>
    //         <div className="inp">
    //             <Link to='/login'>Don't want to add Event</Link>
    //         </div>
    //         <div className="inp">
    //         <button onClick={print}>Add Event</button>
    //         </div>
    //         </div>
    //     </form>
    // </div>

    <div id="register" className="cosmic-form-container">
      <form className="galaxy-form">
        <div className="stellar-header">
          <h1 className="neon-title">Create Cosmic Event</h1>
          <div className="pulse-beam"></div>
        </div>

        <div className="quantum-grid">
          {/* Left Column */}
          <div className="event-input-group">
            <div className="nebula-input">
              <input
                type="text"
                value={event_name}
                onChange={event_nameData}
                required
              />
              <label className="floating-label ">Event Name</label>
              <span className="star-trail"></span>
            </div>

            <div className="nebula-input hologram-input">
              <input
                type="date"
                value={event_date}
                onChange={event_dateData}
                className="hidden-placeholder"
                required
              />
              <label className="floating-label time-capsule-label">Event Date </label>
              <span className="star-trail time-portal-border"></span>
            </div>

            {/* <div className="hologram-input">
              <input
                type="datetime-local"
                value={eventDateTime}
                onChange={handleDateTimeChange}
                className="hidden-placeholder"
                required
              />
              <label className="time-capsule-label">Event Date & Time</label>
              <div className="time-portal-border"></div>
            </div> */}


            <div className="nebula-input hologram-input">
              <input
                type="time"
                value={event_time}
                onChange={event_timeData}
                className="hidden-placeholder"
                required
              />
              <label className="floating-label time-capsule-label">
                Event  Time
              </label>
              <div className="time-portal-border"></div>
              <span className="star-trail"></span>
            </div>

            {/* <div className="hologram-input">
              <input
                type="datetime-local"
                value={eventDateTime}
                onChange={handleDateTimeChange}
                className="hidden-placeholder"
                required
              />
              <label className="time-capsule-label">Event Date & Time</label>
              <div className="time-portal-border"></div>
            </div> */}

            <div className="nebula-input">
              <input type="text" value={venue} onChange={venueData} required />
              <label className="floating-label">Venue</label>
              <span className="star-trail"></span>
            </div>

            <div className="nebula-input">
              <input
                type="text"
                value={organizer_name}
                onChange={organizer_nameData}
                required
              />
              <label className="floating-label">Organizer Name</label>
              <span className="star-trail"></span>
            </div>
          </div>

          {/* Right Column */}
          <div className="event-input-group">
            <div className="nebula-input">
              <input
                type="tel"
                value={organizer_contact}
                onChange={organizer_contactData}
                pattern="[0-9]{10}"
                required
              />
              <label className="floating-label">Contact Number</label>
              <span className="star-trail"></span>
            </div>

            <div className="nebula-input">
              <input
                type="text"
                value={event_image}
                onChange={event_imageData}
                required
              />
              <label className="floating-label">Event Image</label>
              <span className="star-trail"></span>
            </div>


            

            <div className="nebula-input">
              <textarea
                value={event_description}
                onChange={event_descriptionData}
                required
              />
              <label className="floating-label">Event Description</label>
              <span className="star-trail"></span>
            </div>

            {/* <div className="nebula-input image-upload">
              <div className="hologram-upload">
                <input
                  type="file"
                  onChange={event_imageData}
                  accept="image/*"
                  className="upload-input"
                />
                <div className="upload-content">
                  <span className="upload-icon">📷</span>
                  <span className="upload-text">Drag or Click to Upload</span>
                  {event_image && (
                    <div
                      className="image-preview"
                      style={{ backgroundImage: `url(${event_image})` }}
                    ></div>
                  )}
                </div>
              </div>
            </div> */}


            
          </div>
        </div>

        <div className="cosmic-actions">
          <button className="supernova-button" onClick={print}>
            Create Event
            <span className="supernova-burst"></span>
            <span className="particle-wave"></span>
          </button>

          <Link to="/home" className="wormhole-link">
            Cancel Creation
          </Link>
        </div>
      </form>
    </div>
  );
};
export default AddEvent;
