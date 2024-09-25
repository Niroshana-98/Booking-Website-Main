import { Link, Navigate, useParams } from "react-router-dom";
import AccountNav from "../AccountNav";

export default function PlacesPage(){
    const {action} = useParams();
    function linkClasses (type = null){
        let classes = 'inline-flex gap-1 py-2 px-6 rounded-full';
        if(type === false){
            classes += "py-2 px-6 bg-primary text-white font-semibold rounded-full";
        }else{
            classes += ' bg-gray-200';
        }
        return classes;
    }

    return(
        <div>
            <AccountNav/>
            {action !== 'new' && (
                <div className="text-center">
                    <Link className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full" to ={'/account/places/new'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Add New Places
                    </Link>
                </div>
            )}
        </div>
    );
}