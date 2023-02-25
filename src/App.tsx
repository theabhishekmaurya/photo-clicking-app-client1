import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/Home/Home";
import CitizenGuide from "./components/Pages/CitizenGuide";
import FinesPenalties from "./components/Pages/FinesPenalties";
import WatchList from "./components/Pages/WatchList";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/citizen-guide" element={<CitizenGuide />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/fines-and-penalties" element={<FinesPenalties />} />
      </Routes>
    </div>
  );
}

export default App;
