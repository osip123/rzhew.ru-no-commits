import { useState, useContext} from 'react';
import { CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom';
import './profile.scss'

const Profile = () => {

    const[user, setUser] = useState(true)
    // const userAuyh = useContext(user)

    if(user){
        return (
            <div className="Profile__"><CiUser /> <span>Name</span></div>
        )
    }
    else{
        return <Link to='/login'><button>Авторизация</button></Link>
    }
}

export default Profile
