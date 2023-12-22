import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const TaskDashboard = () => {

const {user} = useContext(AuthContext)

    return (
        <div className="flex min-h-[30vh] gap-2 xl:flex-row lg:flex-row flex-col">
     
            <div className="bg-[#26de81] xl:h-[100vh]  h-[50vh] xl:w-[400px] lg:w-[400px] w-full">
            <h2 className="text-center my-4 text-white font-bold">TaskDashboard</h2>
        <div className="my-4">
        <img className="w-[50px] h-[50px] mx-auto border-2 border-white object-cover rounded-full" src={`${user?.photoURL ? user?.photoURL : 'https://i.ibb.co/8KNHKQ8/download.png'}`} alt="" /> 
        </div>


            
            <Link className="text-white font-bold border-b-[1px] border-t-[1px] border-[#1dbf6edc] hover:bg-orange-100 hover:text-black px-4 w-full block py-3" to="/userdashboard">Add Task</Link>
            </div>

           <div className="flex-1 m-[10px]">
           <Outlet></Outlet>
           </div>


        </div>
    );
};

export default TaskDashboard;