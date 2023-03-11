import { Outlet } from "react-router-dom";

export function DashboardContainer() {
  return (
    <div>
      {/* <Header /> */}
      <Outlet />
    </div>
  );
}
