import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Form1 from "./pages/Form1";




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          
          <Route path="profile" element={<Profile />} />

          <Route path="form" element={<Form1 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}