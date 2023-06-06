
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import DataScreen from "./components/DataScreen";
import SummaryScreen from "./components/SummaryScreen";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" element={<TestLogin setIsUserAuth={setIsUserAuth} />} /> */}
        <Route path="/" element={<DataScreen />} />
        <Route path="/summary/:showId" element={<SummaryScreen/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
