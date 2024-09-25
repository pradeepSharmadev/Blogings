import "./App.css";
import { Homepages, Blogcontents } from ".//pages/index";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepages />}></Route>
      <Route path="/blog/:id" element={<Blogcontents />}></Route>
    </Routes>
  );
}

export default App;
