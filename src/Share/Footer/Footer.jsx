
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SlSocialLinkedin } from "react-icons/sl";
import { TiSocialPinterestCircular } from "react-icons/ti";

const Footer = () => {
    return (
        <div className="h-[200px] mt-2 bg-[#30336b]">
          <div className="flex justify-center items-center h-full">
     <div>
     <h2 className="text-white font-bold text-center ">Task Website</h2>

<div className="flex gap-6 mt-6">
<FaFacebook className="text-white hover:text-orange-400 cursor-pointer text-[23px]"></FaFacebook>
<AiFillTwitterCircle className="text-white hover:text-orange-400 cursor-pointer text-[23px]"></AiFillTwitterCircle>
<SlSocialLinkedin className="text-white hover:text-orange-400 cursor-pointer text-[23px]"></SlSocialLinkedin>
<div>
<TiSocialPinterestCircular className="text-white hover:text-orange-400 cursor-pointer text-[30px]"></TiSocialPinterestCircular>
</div>
</div>
     </div>
          </div>
            
        </div>
    );
};

export default Footer;