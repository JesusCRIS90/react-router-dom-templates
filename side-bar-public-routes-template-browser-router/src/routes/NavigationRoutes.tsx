import { Routes, Route, Navigate } from "react-router-dom";

import { HomePage } from "../pages/HomePage/HomePage.tsx";

import { routes } from "../routes/routes.ts";

export const NavigationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      {routes.map((route) => (
        <Route
          path={route.path}
          element={<route.Component />}
          key={route.name}
        />
      ))}

      <Route path="/*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
