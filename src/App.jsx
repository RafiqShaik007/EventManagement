import LoginCheck from "./LoginCheck";
import "./style.css";
import Register from "./Register";
import Welcome from "./Welcome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edit from "./Edit";
import Friends from "./Friends";
import Messages from "./Messages";
import Quotes from "./Quotes";
import ProtectRoutes from "./ProtectRoutes";
import ChatBox from "./ChatBox";

import Home from "./Home";
import Login from "./Login";

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

          <Route element={<ProtectRoutes />}>
            <Route path="/home/" element={<Quotes />} />
            <Route path="/home/friends" element={<Friends />} />
            <Route path="/home/messages" element={<Messages />}>
              <Route path="/home/messages/" element={<ChatBox />} />
              <Route path="/home/messages/:name" element={<ChatBox />} />
            </Route>
          </Route>

          <Route path="/edit/:abc" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};
export default App;
