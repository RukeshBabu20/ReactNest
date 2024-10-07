import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Path } from "./constants/constant";
import "./App.css";
import { lazy, Suspense } from "react";
import { LinearProgress } from "@mui/material";
import ErrorBoundary from "./errors/ErrorBoundary";

const Greeting = lazy(() => import("./components/Greeting"));
const Calculator = lazy(() => import("./components/calculator/Calculator"));

function App() {
  return (
    <>
      <BrowserRouter>
        <ErrorBoundary>
          <Suspense fallback={<LinearProgress color="success" />}>
            <Routes>
              <Route path={Path.Greeting} element={<Greeting />} />
              <Route path={Path.Calculator} element={<Calculator />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </>
  );
}

export default App;
