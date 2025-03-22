import { Outlet } from "react-router";
export default function AppLayout() {
  return (
    <main className="relative">
      <div className="absolute inset-0 h-full md:py-[20px] md:max-w-[600px] m-auto">
        <div className="md:rounded-xl bg-Gray-2 h-full md:border-[1px] border-Gray-4">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
