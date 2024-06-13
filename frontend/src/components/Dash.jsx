import { FaHouse } from "react-icons/fa6";
import { MdAnalytics } from "react-icons/md";
import { FaFileWaveform } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { IoPersonSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

function Dash() {
  return (
    <>
      <div className=" bg-amber-300 grid-flow-col h-[41em]  w-[10em]">
        <div className=" text-center ">
          <div className=" text-4xl">
            <h1>WOW</h1>

            <div className="my-[1em] text-xl">
              <h2>General</h2>
            </div>
          </div>
          <div>
            <FaHouse />
            <p>Dashboard</p>
          </div>

          <br></br>
          <p>
            <MdAnalytics />
            Analyitics
          </p>

          <div className="my-[1em] text-xl">
            <h2>Tools</h2>
          </div>

          <p>
            <FaFileWaveform />
            Form
          </p>
          <br></br>
          <p>
            <SlCalender />
            Calender
          </p>

          <div className="my-[1em] text-xl">
            <h2>Settings & Account</h2>
          </div>

          <p>
            <IoPersonSharp />
            Account
          </p>
          <br></br>
          <p>
            <IoMdSettings />
            Settings
          </p>
        </div>
      </div>
      <div className="flex justify-items-start  absolute top-0 ">
        <FaSearch />
        <input
          className="py-3 px-[10em] bg-neutral-100 left-[3rem] rounded-full flex-1 shadow-lg"
          type="search"
          placeholder="search"
        />

        <h1>hello</h1>
        <p>Welcome to the wow dashboard</p>
      </div>
    </>
  );
}

export default Dash;
