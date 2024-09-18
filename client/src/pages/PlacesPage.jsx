import { Link, useParams } from "react-router-dom";

export default function PlacesPage(){
    const {action} = useParams();
    return(
        <div>
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
            {action === 'new' && (
                <div>
                    <form>
                        <h2 className="text-2xl mt-4">Title</h2>
                        <p className="text-gray-500 text-sm">Title for your place. Should be short and Catchy as in advertisement</p>
                        <input type="text" placeholder="Title, for example: My Sweet Escape"/>
                        <h2 className="text-2xl mt-4">Address</h2>
                        <p className="text-gray-500 text-sm">Address to Your Place</p>
                        <input type="text" placeholder="Address"/>
                        <h2 className="text-2xl mt-4">Photos</h2>
                    </form>
                </div>
            )}
        </div>
    );
}