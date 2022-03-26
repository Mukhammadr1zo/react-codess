import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Profile from "./Pages/Posts/Posts";
import Comments from "./Pages/Comments/Comments";

function AuthenticatedApp() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/users" />} />
        <Route path="/users" element={<Home />} />
        <Route path="/profile/:user_id" element={<Profile />} />
        <Route path="/comments/:user_id" element={<Comments />} />
      </Routes>
    </>
  );
}

export default AuthenticatedApp;
