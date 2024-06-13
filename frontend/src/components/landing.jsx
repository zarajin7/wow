import {Link} from "react-router-dom"
function Landing(){
    return(
        <>
        <div className="bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('./src/assets/wow_ pics/woww.jpeg')] h-[100vh] mt-3	my-4 w-[100] bg-no-repeat bg-center bg-cover shadow-lg shadow-gray-300">
        <div className=" flex justify-center items-center flex-col mt-3  h-full ">
          <h1 className=" font-bold font-sans text-3xl  text-black  ">
           World of work <br /> project is dedicated to 
            <br /> empowering street youths between the ages of 18-24 that focuses on teaching life skills, 
            <br /> providing education and housing, and promoting overall wellbeing. <br />
            
          </h1>

          <div>
            <Link to="/don"><button className="border bg-red-700 text-black  px-[3em] py-[1em] outline-none rounded-lg p-3">
              Donate
            </button></Link>
          </div>
        </div>
        </div>
        </>
    )
}
export default Landing