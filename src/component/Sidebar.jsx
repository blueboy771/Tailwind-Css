import React from "react";
import { HomeIcon } from "@heroicons/react/solid";
import { PiChalkboardTeacherFill, PiStudentBold } from "react-icons/pi";
import { IoHomeSharp } from "react-icons/io5";
import { GrGallery } from "react-icons/gr";
import { MdOutlinePayment } from "react-icons/md";
import { MdClass } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { FaArrowUpShortWide } from "react-icons/fa6";
import { FaUser, FaUserGraduate } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className=" bg-[#140044] flex-col justify-center w-14 sm:w-20 h-screen">
      <div className="h-20 items-center flex">
        <IoHomeSharp
          size={35}
          className=" text-[#85C3CB] left-3 sm:left-6 fixed "
        />
      </div>

      <div className="fixed left-3 sm:left-6 top-[100px]">
        <PiChalkboardTeacherFill
          size={35}
          className=" bg-[#85C3CB] p-2 rounded-lg mb-4 text-black "
        />

        <FaUserGraduate
          size={35}
          className="  bg-[#85C3CB] p-2 rounded-lg mb-4 text-black "
        />

        <GrGallery
          size={35}
          className="  bg-[#85C3CB] p-2 rounded-lg mb-4 text-black "
        />

        <MdOutlinePayment
          size={35}
          className="  bg-[#85C3CB] p-2 rounded-lg mb-4 text-black "
        />

        <MdClass
          size={35}
          className="  bg-[#85C3CB] p-2 rounded-lg mb-4 text-black "
        />

        <RiAdminFill
          size={35}
          className="  bg-[#85C3CB] p-2 rounded-lg mb-4 text-black "
        />
      </div>

      <div className="fixed bottom-4 left-3 sm:left-6">
        <a href="#top">
          <FaArrowUpShortWide
            size={35}
            className="  bg-[#85C3CB] p-2 rounded-lg mb-4 text-black "
          />
        </a>
        <FaUser
          size={35}
          className="  bg-[#85C3CB] p-2 rounded-lg mb-4 text-black "
        />
      </div>
    </div>
  );
};

export default Sidebar;
