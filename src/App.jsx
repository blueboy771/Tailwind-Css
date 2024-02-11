import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Sidebar from "./component/Sidebar";
import AdminNav from "./component/AdminNav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 relative">
        <AdminNav />
      </div>
    </main>
  );
}

export default App;
