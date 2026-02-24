import { createBrowserRouter, Navigate, type RouteObject } from "react-router-dom";
import { lazyRoutes } from "./routes";
import AppLayout from "../layouts/AppLayout";

export const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    // errorElement: <lazyRoutes.NotFoundPage />,
    children: [
      {
        index: true,
        element: (
          <Navigate
            to="/project"
            replace
          />
        ),
      },
      { path: "project", element: <lazyRoutes.ProjectPage /> },
      { path: "project/projectId", element: <lazyRoutes.ProjectDetailPage /> },
      { path: "task", element: <lazyRoutes.TaskPage /> },
    ],
  },
];

export const router = createBrowserRouter([...publicRoutes]);
