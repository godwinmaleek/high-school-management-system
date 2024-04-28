import { useState } from "react";
import Loader from "./components/loader";
import Alert from "./components/alert";
import Sidebar from "./components/sidebar";
import Topbar from "./components/topbar";

export default function Layout({ pageName, children }) {
  const [sidebarIsOpen, toggleSidebarIsOpen] = useState(false);

  return (
    <div className="relative flex">
      <Loader />
      <Alert />

      <Sidebar
        sidebarOpen={sidebarIsOpen}
        setSidebarOpen={() => toggleSidebarIsOpen(!sidebarIsOpen)}
      />
      <div className="w-full min-h-screen lg:w-4/5 pb-10 lg:ml-72">
        <Topbar handleSideBarOpen={() => toggleSidebarIsOpen(!sidebarIsOpen)} />
        <main className="py-10 min-h-[100svh]  bg-[#FDFDFD]">
          <h1>{pageName}</h1>
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
