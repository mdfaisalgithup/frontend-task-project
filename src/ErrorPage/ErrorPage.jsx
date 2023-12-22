import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center h-[100vh]">
            <div>
            <h2 className="font-bold text-black text-[40px]">404 Not Found</h2>
            <Link to="/"> <button className="block bg-red-500 mx-auto text-[18px] font-bold px-6 py-2 text-white hover:bg-slate-600">Back Now</button></Link>
            </div>
            
           
        </div>
    );
};

export default ErrorPage;