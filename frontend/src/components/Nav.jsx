import {Link} from "react-router-dom"
function Nav(){
    return(
        <>
          <nav>
        <div className="  bg-amber-300   ">
          <div className="container  flex justify-between  px-10 py-5  items-end">
            <ul className="flex flex-row gap-5 items-center">
            <Link to="/"><img  className="w-[5em]" src="src/assets/wow_ pics/WOW.svg"/>
            <li>Home</li></Link>
                <Link to="/login">  <li>login</li></Link>
               <Link to="/active"><li>Activites</li></Link>
               <Link to="/don"><li>Donate</li></Link>
               <Link to="/dash"><li>Dashboard</li></Link>
            </ul>
            </div>
        </div>
      </nav>
        </>
    )
}

export default Nav