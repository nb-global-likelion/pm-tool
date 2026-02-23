import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/pageRoutes";

export default function App() {
  return (
    <Suspense fallback={<div className="p-6">Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
