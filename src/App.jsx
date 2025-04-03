import LoginCheck from "./LoginCheck";
import "./style.css";
import Register from "./Register";
import Welcome from "./Welcome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edit from "./Edit";


import ProtectRoutes from "./ProtectRoutes";


import Home from "./Home";
import Login from "./Login";
import AddEvent from "./AddEvent";
import Events from "./AllEventData";

const App = () => {
  return (
    <main>
      <BrowserRouter>
        {/* <Routes>
                <Route path='/' element={<Welcome/>} />
                <Route path='/login' element={<LoginCheck />} />
                <Route path='/register' element={<Register/>} />

                <Route element={<ProtectRoutes />} >
                    <Route path='/home/' element={<Quotes/>} />
                    <Route path='/home/friends' element={<Friends/>} />
                    <Route path='/home/messages' element={<Messages/>} >
                        <Route path='/home/messages/' element={<ChatBox/>} />
                        <Route path='/home/messages/:name' element={<ChatBox/>} />
                    </Route>
                </Route>

                <Route path='/edit/:abc' element={<Edit/>} />
                
            </Routes> */}

        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register />} />

          <Route path='/home/' element={<Home/>} >
            
            <Route path="/home/addEvent" element={<AddEvent/>} />
            <Route path="/home/allEvents" element={<Events/>}>
            </Route>
              
            </Route>
          

          <Route path="/edit/:abc" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};
export default App;
