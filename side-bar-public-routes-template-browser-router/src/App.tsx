// import { Suspense } from "react";

import { BrowserRouter } from "react-router-dom";
import { NavigationRoutes } from "./routes/NavigationRoutes";
// import SideBar from "./components/SideBar";
import {
  SideBar
} from "./components/side-bar"

import { MainLayout } from "../src/layouts/Layaouts";

function App() {
  return (
    // <Suspense fallback={<span>Loading...</span>}>
    <BrowserRouter>
      <MainLayout>
        <SideBar />
        <NavigationRoutes />
      </MainLayout>
    </BrowserRouter>
    // </Suspense>
  );
}

export default App;
