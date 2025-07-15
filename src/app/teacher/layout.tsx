import WithTeacherAuth from "../components/WithTeacherAuth";
import Sidebar from "../components/layouts/teacher";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
     <WithTeacherAuth>
   <div className="flex  min-h-screen bg-gray-100">
        {/* Sidebar handles its own responsive logic */}
        <Sidebar />
        <div className="flex-grow p-4 md:p-6 overflow-x-auto mt-4">
          {children}
        </div>
      </div>
    </WithTeacherAuth>
  );
}
