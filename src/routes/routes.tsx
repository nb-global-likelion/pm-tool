import React from "react";

export const lazyRoutes = {
  ProjectPage: React.lazy(() => import("../pages/project/ProjectPage")),
  TaskPage: React.lazy(() => import("../pages/task/TaskPage")),
};
