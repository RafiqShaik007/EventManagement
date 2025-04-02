import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import style from "./styles/home.module.css";
import { Link } from "react-router-dom";

const Friends = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/employees")
      .then((res) => {
        // console.log(res.data)
        setData(res.data);
      })
      .catch(() => {
        console.log("Some ERROR in fetching in Home Component");
      });
  }, [data]);

  let remove = (s) => {
    console.log("Delete Function is Working", s);

    axios.delete(`http://localhost:5000/employees/${s}`)
    .then((res)=>{
        console.log(res.data)
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMhuYcyWOfOrmXs7ItuvY2wnvJdNdid_euww&usqp=CAU"
                alt=""
              />
              <br />
              <div>
                <h5>Name</h5>
                <h4>:{x.name}</h4>
              </div>
              <div>
                <h5>Email</h5>
                <h4>:{x.email}</h4>
              </div>
              <div>
                <h5>Company</h5>
                <h4>:{x.company}</h4>
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
export default Friends;
