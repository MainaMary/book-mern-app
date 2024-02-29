import { Routes, Route } from "react-router-dom";
import CreateFormBook from "../pages/create-form-book";
import Home from "../pages/Home";
import UpdateFormBook from "../pages/update-from-book";
const appRoutes = [
  {
    component: <Home />,
    path: "/",
  },
  {
    component: <CreateFormBook />,
    path: "/create",
  },
  {
    component: <UpdateFormBook />,
    path: "/edit/:id",
  },
];
const AppRoutes = () => {
  return (
    <Routes>
      {appRoutes.map((label) => (
        <Route key={label.path} element={label.component} path={label.path} />
      ))}
    </Routes>
  );
};
export default AppRoutes;
