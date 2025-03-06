import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RandomMessage from "./components/RandomMessage";
import MBTIPage from "./components/MBTIPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* メインのランダム名言ページ */}
        <Route path="/" element={<RandomMessage />} />
        {/* MBTIの結果ページ */}
        <Route path="/mbti/:type" element={<MBTIPage />} />
      </Routes>
    </Router>
  );
}

export default App;
