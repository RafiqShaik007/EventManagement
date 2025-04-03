import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

import "./styles/allEvents.css"

const Events = () => {
  let [data, setData] = useState([]);

  let [reload, setReload] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/event/AllEventData")
      .then((res) => {
        // console.log(res.data)
        setData(res.data.data);
      })
      .catch(() => {
        console.log("Some ERROR in fetching in Home Component");
      });
  }, [reload]);

  let remove = (object_id) => {
    console.log("Delete Function is Working", object_id);

    axios
      .delete(`http://localhost:8080/api/event/deleteEvent/${object_id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.status === true) {
          alert(res.data.message);
          setReload(reload === true ? false : true);
        } else {
          alert(res.data.message);
        }
      });
  };

  return (
    // <div id={style.home}>
    //   {/* <nav>
    //     <h1>ALL EMPLOYEES DETAILS</h1>{" "}
    //     <Link to="/register">Create Employee</Link>
    //   </nav> */}
    //   <main>
    //     {" "}
    //     {data.map((x) => {
    //       return (
    //         <section key={x._id}>
    //           <img
    //             src={x.event_image}
    //             alt=""
    //           />
    //           <br />
    //           <div>
    //             <h5>Event Name</h5>
    //             <h4>:{x.event_name}</h4>
    //           </div>
    //           <div>
    //             <h5>Event Date</h5>
    //             <h4>:{x.event_date}</h4>
    //           </div>
    //           <div>
    //             <h5>Event Time</h5>
    //             <h4>:{x.event_time}</h4>
    //           </div>
    //           <div>
    //             <h5>Event Venue</h5>
    //             <h4>:{x.venue}</h4>
    //           </div>
    //           <div>
    //             <h5>Organizer Name</h5>
    //             <h4>:{x.organizer_name}</h4>
    //           </div>
    //           <div>
    //             <h5>Organizer Contact</h5>
    //             <h4>:{x.organizer_contact}</h4>
    //           </div>
    //           <div>
    //             <h5>Event Description</h5>
    //             <h4>:{x.event_description}</h4>
    //           </div>
    //           <div className={style.btns}>
    //             <button>
    //               <Link to={`/edit/${x._id}`}>EDIT</Link>
    //             </button>
    //             <button
    //               onClick={() => {
    //                 remove(x._id);
    //               }}
    //             >
    //               DELETE
    //             </button>
    //           </div>
    //         </section>
    //       );
    //     })}
    //   </main>
    // </div>

    // <div id="all-events">

    // <div  className="galaxy-events">
    //   <main className="event-hub">
    //     {data.map((x) => (
    //       <article key={x._id} className="quantum-card">
    //         <div className="hologram-wrapper">
    //           <img
    //             src={x.event_image}
    //             alt={x.event_name}
    //             className="event-portal"
    //           />
    //           <div className="temporal-overlay"></div>
    //         </div>

    //         <div className="cosmic-details">
    //           <div className="stellar-header">
    //             <h3 className="nebula-title">{x.event_name}</h3>
    //             <p className="time-anomaly">
    //               {x.event_date} • {x.event_time}
    //             </p>
    //           </div>

    //           <div className="blackhole-info">
    //             <div className="singularity">
    //               <span className="event-quasar">Venue</span>
    //               <span className="event-pulsar">{x.venue}</span>
    //             </div>
    //             <div className="singularity">
    //               <span className="event-quasar">Organizer</span>
    //               <span className="event-pulsar">{x.organizer_name}</span>
    //               <span className="event-comet">{x.organizer_contact}</span>
    //             </div>
    //           </div>

    //           <div className="wormhole-desc">
    //             <p>{x.event_description}</p>
    //           </div>

    //           <div className="neutrino-actions">
    //             <button className="supernova-btn edit-nova">
    //               <Link to={`/edit/${x._id}`}>Edit Event</Link>
    //             </button>
    //             <button
    //               className="supernova-btn delete-blackhole"
    //               onClick={() => remove(x._id)}
    //             >
    //               Delete Forever
    //             </button>
    //           </div>
    //         </div>
    //       </article>
    //     ))}
    //   </main>
    // </div>
    // </div>

    <div id="all-events" className="galaxy-events">
  <main className="event-hub">
    {data.map((x) => (
      <article key={x._id} className="quantum-card">
        {/* Image Section */}
        <div className="hologram-wrapper">
          <img 
            src={x.event_image} 
            alt={x.event_name}
            className="event-portal"
          />
          <div className="temporal-overlay"></div>
        </div>

        {/* Content Section - Add this container */}
        <div className="cosmic-content">
          {/* Event Header */}
          <div className="stellar-header">
            <h3 className="nebula-title">{x.event_name}</h3>
            <p className="time-anomaly">
              {new Date(x.event_date).toLocaleDateString()} • {x.event_time}
            </p>
          </div>

          {/* Event Details Grid - Add this structure */}
          <div className="blackhole-grid">
            <div className="singularity">
              <span className="event-quasar">Venue</span>
              <span className="event-pulsar">{x.venue}</span>
            </div>
            
            <div className="singularity">
              <span className="event-quasar">Organizer</span>
              <span className="event-pulsar">{x.organizer_name}</span>
              <span className="event-comet">{x.organizer_contact}</span>
            </div>

            <div className="singularity">
              <span className="event-quasar">Description</span>
              <span className="event-pulsar">{x.event_description}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="neutrino-actions">
            <button className="supernova-btn edit-nova">
              <Link to={`/edit/${x._id}`}>Edit Event</Link>
            </button>
            <button 
              className="supernova-btn delete-blackhole"
              onClick={() => remove(x._id)}
            >
              Delete Event
            </button>
          </div>
        </div>
      </article>
    ))}
  </main>
</div>
  );
};
export default Events;
