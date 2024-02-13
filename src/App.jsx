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
    <main>
      <div className="">
        <div className="relative h-screen">
          <div className=" z-10">
            <Hero />
          </div>

          <div className=" bg-gray-500 absolute z-20 top-0 mx-0  flex justify-center z-1 w-full">
            <Navbar />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
