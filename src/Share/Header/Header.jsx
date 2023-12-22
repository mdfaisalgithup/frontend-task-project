import { Link, NavLink } from "react-router-dom";
import "./Header.css"
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Header = () => {

const {user, logouter} = useContext(AuthContext)


const logOut = () =>{

    logouter()
    .then(() => {
        alert("log out")
      }).catch((error) => {
        console.log(error)
      });
 

}
    return (
        <div className="shadow-md bg-[#30336B] text-white">
        <div className="xl:mx-[240px] lg:mx-[150px] md:mx-[50px] mx-[10px] py-6">


<div className="flex justify-center items-center gap-10">
<NavLink to="/">Home</NavLink>
<NavLink to="/taskall">All Task</NavLink>
{

user?.email ? 

<div className="w-[50px] h-[50px] relative opens">
<img className="w-full h-full hover:border-2 border-white cursor-pointer transition-all object-cover rounded-full" src={`${user?.photoURL ? user?.photoURL : 'https://i.ibb.co/8KNHKQ8/download.png'}`} alt="" /> 

<div className="shadow-md adds absolute left-[0px] top-[100%] w-[300px] transition-all text-black z-30 bg-[#ddd] rounded-sm font-bold">

<div>
 <Link to="/userdashboard"><button className="p-4 hover:bg-orange-400 hover:text-white text-left w-full">
 User Dashboard</button></Link>
</div>
<div>


</div>
<button onClick={logOut} className="p-4 hover:bg-orange-400 hover:text-white text-left w-full">Log Out</button>

</div>

</div>
: <NavLink to="/login">Login</NavLink>
}

</div>

        
        </div></div>
    );
};

export default Header;