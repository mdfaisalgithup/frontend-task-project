import { Link } from "react-router-dom";


const Home = () => {
    return (   <div className="min-h-[50vh]">
        <div className="xl:h-[700px] lg:h-[700px] md:h-[400px] h-[300px]  w-full relative bg-[#000000ca]">

            <img className="w-full opacity-40 h-full object-cover" src="https://i.ibb.co/mtM2Wd2/hands-820272-1280.jpg" alt="logo" />

            <div className="absolute top-0 w-full h-full">
               <div className="flex justify-center items-center h-full">
            <div>

           <h2 className="text-center my-4 font-bold text-white">Task manage services</h2>

               <Link to="/userdashboard"><button className="px-4 py-3 bg-[#7e82d4] mx-auto block text-white hover:bg-[#686fe9]">“Let’s Explore</button></Link> 
               
                 </div>



               </div>
            </div>
            
        </div>

     

        </div>
    );
};

export default Home;