import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./page/home";
import AddLogs from "./page/add-logs";

function App() {
  return (
    <>
      <div className="main">
        <BrowserRouter>
          <Routes>
            <Route>
              <Route index element={<Home />} />
              <Route path="/add-log" element={<AddLogs />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
