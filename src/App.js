import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/home";
import StadiumsPage from "./pages/stadiums/stadium";
import TeamsPage from "./pages/teams/teams";
import CalendarsPage from "./pages/calendars/calendars";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/teams" element={<TeamsPage />}/>
        <Route path="/stadiums" element={<StadiumsPage />}/>
        <Route path="/calendars" element={<CalendarsPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
