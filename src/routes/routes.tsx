import React from "react";

export const lazyRoutes = {
  ProjectPage: React.lazy(() => import("../pages/project/ProjectPage")),
  ProjectDetailPage: React.lazy(() => import("../pages/project/detail/ProjectDetailPage")),
  TaskPage: React.lazy(() => import("../pages/task/TaskPage")),
};
