import ChatPage from "./Components/ChatPage";
import Page1 from "./Components/Page1";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/*" element={<Page1 />} />
          <Route exact path="/chat/:id" element={<ChatPage />} />
        </Routes>
      </Router>
      {/* <Page1 /> */}
    </>
  );
}

export default App;
