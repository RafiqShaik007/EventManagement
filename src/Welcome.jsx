import { useNavigate, Link } from "react-router-dom";
import "./styles/welcome.css";


const Welcome = () => {
  return (
    <div id="event_welcome">
      <div className="wlc-container">
        <div className="glass-card">
          <h1>Event Horizon</h1>
          <p className="subtitle">Crafting Unforgettable Experiences</p>

          <div className="events-grid">
            <div className="event-card">
              <h3 style={{ color: "white" }}>Corporate Events</h3>
              <p style={{ color: "rgba(255,255,255,0.7)", marginTop: "1rem" }}>
                Professional & impactful business gatherings
              </p>
            </div>

            <div className="event-card">
              <h3 style={{ color: "white" }}>Wedding Planning</h3>
              <p style={{ color: "rgba(255,255,255,0.7)", marginTop: "1rem" }}>
                Creating your perfect day
              </p>
            </div>

            <div className="event-card">
              <h3 style={{ color: "white" }}>Conferences</h3>
              <p style={{ color: "rgba(255,255,255,0.7)", marginTop: "1rem" }}>
                Knowledge-sharing at its best
              </p>
            </div>
          </div>

          <Link to='/login'><button className="cta-button">Explore Events</button></Link>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
