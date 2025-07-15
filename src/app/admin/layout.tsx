import Sidebar from "../components/layouts/admin";
import WithAdminAuth from "../components/WithAdminAuth";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WithAdminAuth>
      <div className="flex  min-h-screen bg-gray-100">
        {/* Sidebar handles its own responsive logic */}
        <Sidebar />
        <div className="flex-grow p-4 md:p-6 overflow-x-auto mt-4">
          {children}
        </div>
      </div>
    </WithAdminAuth>
  );
}
