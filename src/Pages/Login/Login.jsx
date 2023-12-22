import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {

    const {loginData, googleReg} = useContext(AuthContext)


    const loginNow = (e) => {

        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        form.reset()
        if(!email || !password){

            Swal.fire("Form empty. please fillup your information")
            return
        }

        else {

            
        loginData(email, password)
        .then(() => {

        
        return
        })
        .catch(error => {
        
          
            Swal.fire(`${error.message}`)
            return
        })
        }
     

        

    }



const googleSign = () => {

    googleReg()
    .then(() => {

    })
    .catch(error => {
    
       Swal.fire(`${error.message}`)
    })
    


}





    return (
        <div className="xl:mx-[240px] lg:mx-[150px] md:mx-[50px] mx-[10px] h-[80vh]">

 

          <div className="xl:w-1/2 lg:w-1/2 w-full bg-[#686de0] px-9 my-10 py-10 space-y-4 rounded-md mx-auto">
<h2 className="text-center text-white font-bold text-[18px] my-4">Login</h2>


          <form onSubmit={loginNow}>

    
        <div>
        <label className="font-semibold text-white" htmlFor="email">Email</label>
        <input className="w-full border-[1px] my-2 rounded-md p-3 text-[18px] outline-none" type="email" placeholder="Write Your Email" id="email" />
        </div>

        <div>
        <label className="font-semibold text-white" htmlFor="password">Password</label>
        <input className="w-full border-[1px] my-2 rounded-md p-3 text-[18px] outline-none" type="password" placeholder="Write Your Password" id="password" />
        <div>
            <Link className="text-white font-semibold hover:text-orange-500" to="/register">Are You Register?</Link>
        </div>
        </div>
            <input className="bg-orange-500 mx-auto block cursor-pointer px-6 py-3 rounded-md font-bold hover:bg-orange-600 text-white" type="submit" value="Log In" />

</form>

<div className="flex justify-center my-4">

<button onClick={googleSign}>
<div className="bg-[#fff] w-max rounded-full p-[2px] cursor-pointer">
       <FcGoogle className="text-[55px]"></FcGoogle>
 </div>
</button>
</div>




          </div>
    

        </div>
    );
};

export default Login;