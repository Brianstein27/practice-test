import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import LeftSidebar from "./components/Sidebars/LeftSidebar.jsx";
import FoldersTable from "./components/main/FoldersTable.jsx";

function App() {
  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      <main className="flex justify-between gap-8 overflow-hidden">
        <LeftSidebar />
        <FoldersTable />
        <LeftSidebar />
      </main>
    </div>
  );
}

export default App;
