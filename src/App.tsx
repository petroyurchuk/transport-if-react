import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import TravelsPage from "./pages/Travels";
import TravelPage from "./pages/Travel";
function App() {
  return (
    <div className="bg-black/90 min-h-screen w-full overflow-hidden">
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<TravelsPage />} path="/travels" />
        <Route element={<TravelPage />} path={"/travels/:travelId"} />
      </Routes>
    </div>
  );
}

export default App;
