import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import style from "./styles/home.module.css";
import { Link } from "react-router-dom";

const Events = () => {
  let [data, setData] = useState([]);

  let [reload, setReload] = useState(true)

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
    console.log("Delete Function is Working", object_id );

    

    axios.delete(`http://localhost:8080/api/event/deleteEvent/${object_id}`)
    .then((res)=>{
        console.log(res.data)
        if(res.data.status === true){
            alert(res.data.message)
            setReload(reload=== true ? false: true)
        }
        else{
            alert(res.data.message)
        }
    })
  };

  return (
    <div id={style.home}>
      {/* <nav>
        <h1>ALL EMPLOYEES DETAILS</h1>{" "}
        <Link to="/register">Create Employee</Link>
      </nav> */}
      <main>
        {" "}
        {data.map((x) => {
          return (
            <section key={x._id}>
              <img
                src={x.event_image}
                alt=""
              />
              <br />
              <div>
                <h5>Event Name</h5>
                <h4>:{x.event_name}</h4>
              </div>
              <div>
                <h5>Event Date</h5>
                <h4>:{x.event_date}</h4>
              </div>
              <div>
                <h5>Event Time</h5>
                <h4>:{x.event_time}</h4>
              </div>
              <div>
                <h5>Event Venue</h5>
                <h4>:{x.venue}</h4>
              </div>
              <div>
                <h5>Organizer Name</h5>
                <h4>:{x.organizer_name}</h4>
              </div>
              <div>
                <h5>Organizer Contact</h5>
                <h4>:{x.organizer_contact}</h4>
              </div>
              <div>
                <h5>Event Description</h5>
                <h4>:{x.event_description}</h4>
              </div>
              <div className={style.btns}>
                <button>
                  <Link to={`/edit/${x._id}`}>EDIT</Link>
                </button>
                <button
                  onClick={() => {
                    remove(x._id);
                  }}
                >
                  DELETE
                </button>
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
};
export default Events;
