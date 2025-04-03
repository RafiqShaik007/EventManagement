import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import zz from "./styles/edit.module.css";
import { useNavigate, Link } from "react-router-dom";

const Edit = () => {
  let { abc } = useParams();

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

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/event/OneEventDetails/${abc}`)
      .then((res) => {
        console.log("Successfully Got the Data in Edit Component");
        

        setEvent_name(res.data.data.event_name);
        setEvent_date(res.data.data.event_date);
        setEvent_time(res.data.data.event_time);
        setVenue(res.data.data.venue);
        setOrganizer_name(res.data.data.organizer_name);
        setOrganizer_contact(res.data.data.organizer_contact);
        setEvent_description(res.data.data.event_description);
        setEvent_image(res.data.data.event_image);
      })
      .catch(() => {
        console.log("Some Error in Edit User");
      });
  }, [abc]);

  
  let print = (e) => {
    e.preventDefault();
    
    axios
      .put(`http://localhost:8080/api/event/EditEvent/${abc}`, {
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
        // alert(res.data.message)
        if (res.data.status) {
          navigate("/home");
        }
      })
      .catch(() => {
        console.log("Some Error in Updating the Data");
      });
  };

  return (
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
              <label className="floating-label time-capsule-label">
                Event Date{" "}
              </label>
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
                Event Time
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
export default Edit;
