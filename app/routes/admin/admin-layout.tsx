import { Outlet } from "react-router";

function AdminLayout() {
  return (
    <div className="admin-layout">
      <aside className="children">
        <Outlet />
      </aside>
    </div>
  );
}

export default AdminLayout;
