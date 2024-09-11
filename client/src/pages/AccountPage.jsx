import { useContext } from "react"
import { UserContext } from "../UserContext"
import { Navigate } from "react-router";
import { Link } from "react-router-dom";

export default function AccountPage(){
    const {ready,user} =useContext(UserContext);

    if(!ready){
        //return 'Loading...';
    }

    if(ready && !user){
        return <Navigate to={'/login'}/>
    }
    return(
        <div>
            <nav className="w-full flex justify-center mt-8 gap-2">
                <Link className="py-2 px-6 bg-primary text-white font-semibold rounded-full" to={'/account'}>My Profile</Link>
                <Link className="py-2 px-6 bg-primary text-white font-semibold rounded-full " to={'/account/bookings'}>My Bookings</Link>
                <Link className="py-2 px-6 bg-primary text-white font-semibold rounded-full" to={'/account/places'}>My Accommadations</Link>
            </nav>
        </div>
    );
}