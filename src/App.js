import "./App.css";
import { Homepages, Blogcontents, Pagenotfound } from ".//pages/index";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepages />}></Route>
      <Route path="/blog/:id" element={<Blogcontents />}></Route>
      <Route path="/workingon" element = {<Pagenotfound />}></Route>
    </Routes> 
  );
}

export default App;
