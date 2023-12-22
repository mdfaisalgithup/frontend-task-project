
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const Register = () => {
const {registerData} = useContext(AuthContext)

const register = (e) => {
e.preventDefault();
const form = e.target;
const email = form.email.value;
const password = form.password.value;

form.reset()

if(!email || !password){

    Swal.fire("Form empty. please fillup your information")
    return
}



registerData(email, password)
.then(() => {

    Swal.fire("Registraion has suessfully!");

})
.catch(error => {
  Swal.fire(`${error.message}`);

})






}


    return (
        <div>
          
          <div className="xl:mx-[240px] lg:mx-[150px] md:mx-[50px] mx-[10px] h-[80vh]">

<div>
 <div className="xl:w-1/2 lg:w-1/2 bg-[#686de0] px-9 my-10 py-10 space-y-4 rounded-md mx-auto">
<h2 className="text-center text-white text-[18px] font-bold my-4">Register</h2>
<form onSubmit={register}>



 <div>
<label className="font-semibold text-white" htmlFor="name">Full Name</label>
<input className="w-full border-[1px] my-2 rounded-md p-3 text-[18px] outline-none" type="text" placeholder="Write Your Name" id="name" />
</div>

<div>
<label className="font-semibold text-white" htmlFor="email">Email</label>
<input className="w-full border-[1px] my-2 rounded-md p-3 text-[18px] outline-none" type="email" placeholder="Write Your Email" id="email" />
</div>

<div>
<label className="font-semibold text-white" htmlFor="password">Password</label>
<input className="w-full border-[1px] my-2 rounded-md p-3 text-[18px] outline-none" type="password" placeholder="Write Your Password" id="password" />
<div>
  <Link className="text-white font-semibold hover:text-orange-500" to="/login">Are you login?</Link>
</div>
</div>
  <input className="bg-orange-500 mx-auto block cursor-pointer px-6 py-3 rounded-md font-bold hover:bg-orange-600 text-white" type="submit" value="Register" />

</form> 
</div>
</div>

</div>
        </div>
    );
};

export default Register;