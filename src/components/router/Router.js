import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CustomPacketPage } from "../../pages/CustomPacketPage";
import { DashboardContainer } from "../dashboard/Dashboard";

export function Router() {
  return <RouterProvider router={router} />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardContainer />,
    children: [
      {
        path: "custom-packet",
        element: <CustomPacketPage />,
        errorElement: "not found",
      },
    ],
  },
]);
