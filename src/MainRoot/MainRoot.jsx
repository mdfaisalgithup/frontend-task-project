import { Outlet } from "react-router-dom";
import Header from "../Share/Header/Header";
import Footer from "../Share/Footer/Footer";


const MainRoot = () => {
    return (
        <>
        
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
            
        </>
    );
};

export default MainRoot;