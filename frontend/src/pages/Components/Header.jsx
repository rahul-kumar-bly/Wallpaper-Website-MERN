import {Link, Links} from 'react-router-dom';
import { FaUpload } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";


export default function Header(){
    return (
        <nav className="bg-[#222] text-white shadow-lg p-4">
                <div className='flex gap-2'>
                    <div>
                        <Link to="/"  className="hover:underline hover:text-blue-500 underline">Homepage</Link>
                    </div>
                         <div><Link to="/submit" className="hover:underline hover:text-blue-500 underline">Submit New Wallpaper</Link></div>
                </div>
        </nav>

    )
}