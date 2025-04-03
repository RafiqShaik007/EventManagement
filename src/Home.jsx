// import style from "./home.module.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./home.css"

const Home = () => {
  let navigate = useNavigate();

  let user_email = localStorage.getItem('Login_user')
  let user_name = localStorage.getItem('Login_user_name')
  let user_role = localStorage.getItem('Login_role')


  console.log('localstorage data: ', localStorage.getItem('Login_user'))

  let logout = () => {
    document.cookie = "cond=false";
    navigate("/login");
  };

  return (
    // <div id={style.home}>

    //    <nav>
    //         <div><Link to='/home/'>EVENT HORIZON</Link></div>
    //         <div>
    //             <Link to="/home/addEvent">ADD EVENT</Link>
    //             <Link to="/home/allEvents">DISPLAY ALL EVENTS</Link>
    //             {/* <Link to="/register" onClick={()=>{document.cookie = 'cond=false'}}>CREATE EMPLOYEE</Link> */}

    //         </div>
    //         <div>
    //             <button onClick={logout} title='Are you Sure? You want to Log out?'>LOG OUT</button>
    //         </div>
    //     </nav>
    //     <Outlet />

    // </div>

    // <div id="home" >
    // <div id="home" className="main-container">
    //   <nav className="glass-navbar">
    //     <div className="nav-brand">
    //       <Link to="/home/" className="logo-link">
    //         <span className="logo-gradient">EVENT</span>
    //         <span className="logo-outline">HORIZON</span>
    //       </Link>
    //     </div>

    //     <div className="nav-links">
    //       <Link to="/home/addEvent" className="nav-link neon-hover">
    //         <span className="link-text">ADD EVENT</span>
    //         <span className="link-border"></span>
    //       </Link>
    //       <Link to="/home/allEvents" className="nav-link neon-hover">
    //         <span className="link-text">DISPLAY EVENTS</span>
    //         <span className="link-border"></span>
    //       </Link>
    //     </div>

    //     <div className="nav-actions">
    //       <button onClick={logout} className="logout-btn">
    //         LOG OUT
    //         <span className="logout-overlay"></span>
    //       </button>
    //     </div>
    //   </nav>

    //   <div className="content-container">
    //     <Outlet />
    //   </div>
    // </div>
    // </div>
<div id="home" >
    <div  className="main-container">
    <nav className="glass-navbar">
        <div className="nav-brand">
            <Link to='/home/' className="logo-link">
                <span className="logo-gradient">EVENT</span>
                <span className="logo-outline">HORIZON</span>
            </Link>
        </div>
        
        <div className="nav-links">
            <Link to="/home/addEvent" className="nav-link neon-hover">
                <span className="link-text">ADD EVENT</span>
                <span className="link-border"></span>
            </Link>
            <Link to="/home/allEvents" className="nav-link neon-hover">
                <span className="link-text">DISPLAY EVENTS</span>
                <span className="link-border"></span>
            </Link>
        </div>

        <div className="user-section">
            <div className="profile-wrapper">
                <div className="profile-card">
                    <div className="profile-avatar">
                        {/* Replace with user's avatar/image */}
                        <span className="avatar-initials">{/* Dynamic initials */}</span>
                        <div className="avatar-glow"></div>
                    </div>
                    <div className="user-info">
                        <span className="username">{ user_name}</span>
                        <span className="user-role">{ user_role}</span>
                    </div>
                </div>
                
                <button onClick={logout} className="logout-btn">
                    LOG OUT
                    <span className="logout-overlay"></span>
                </button>
            </div>
        </div>
    </nav>

    <div className="content-container">
        <Outlet />
    </div>
</div>
</div>
  );
};
export default Home;
