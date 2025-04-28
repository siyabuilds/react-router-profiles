import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DeveloperProfile from "./pages/DeveloperProfile";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="developer/:username" element={<DeveloperProfile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
