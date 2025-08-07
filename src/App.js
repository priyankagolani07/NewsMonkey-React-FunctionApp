import "./App.css";

import { useState } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar color="#f11946" progress={progress} height={5} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                key="general"
                pageSize={pageSize}
                country="us"
                category="general"
                setProgress={setProgress}
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                key="business"
                pageSize={pageSize}
                country="us"
                category="business"
                setProgress={setProgress}
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                pageSize={pageSize}
                country="us"
                category="entertainment"
                setProgress={setProgress}
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            exact
            path="/general"
            element={
              <News
                key="general"
                pageSize={pageSize}
                country="us"
                category="general"
                setProgress={setProgress}
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News
                key="health"
                pageSize={pageSize}
                country="us"
                category="health"
                setProgress={setProgress}
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News
                key="science"
                pageSize={pageSize}
                country="us"
                category="science"
                setProgress={setProgress}
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                key="sports"
                pageSize={pageSize}
                country="us"
                category="sports"
                setProgress={setProgress}
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                key="technology"
                pageSize={pageSize}
                country="us"
                category="technology"
                setProgress={setProgress}
                apiKey={apiKey}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
