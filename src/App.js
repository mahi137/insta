import React from "react";
import {Routes, Route} from "react-router-dom";

// componets: 
import Signup from "./Componets/Signup";
import Login from "./Componets/Login";
import Dashboard from "./Componets/Dashboard";

import CreatePost from "./Componets/CreatePost";

import ImageUpload from "./Componets/ImageUpload";


const App = () => {
    

  return(
    <div>

         {/* <CreatePost /> */}

          <ImageUpload />


          
        <Routes>
              <Route path="/" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </div>
  )
}


export default App;


