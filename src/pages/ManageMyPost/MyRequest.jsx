import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const MyRequest = () => {
    const { user } = useContext(AuthContext)
    const [myRequest, setMyRequest] = useState()
    
    useEffect(() => {
        getData()
    }, [user])

console.log(myRequest);
    const getData = async () => {
        axios(`http://localhost:5000/beVolunteer/${user?.email}`)
            .then(res => {
                setMyRequest(res.data)
            })
    }


    return (
        <div>
            
        </div>
    );
};

export default MyRequest;