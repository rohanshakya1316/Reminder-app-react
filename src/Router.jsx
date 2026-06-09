import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import UpcomingPage from "./pages/UpcomingPage";
import AddPage from "./pages/AddPage";
import EditPage from "./pages/EditPage";
import MainLayout from "./layouts/MainLayout";
import { ADD_ROUTE, EDIT_ROUTE, HOME_ROUTE, UPCOMING_ROUTE } from "./constants/routes.js";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_ROUTE} element={<MainLayout/>}>
          <Route index element={<HomePage />} />
          <Route path={UPCOMING_ROUTE} element={<UpcomingPage />} />
          <Route path={ADD_ROUTE} element={<AddPage />} />
          <Route path={EDIT_ROUTE} element={<EditPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
