import axios from "axios";
import { useEffect, useState } from "react";
import Volunteer from "./Volunteer";

const VolunteerNeedsSection = () => {
    const[volunteerDatas,setVolunteerDatas] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/volunteer')
            .then(res => {
            setVolunteerDatas(res.data)
        })
    }, [])
    return (
        <div className="grid my-10 px-8 md:px-0 container mx-auto grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 lg:grid-cols-3">
            {
                volunteerDatas.map(volunteer => <Volunteer
                    key={volunteer._id}
                    volunteer={volunteer}
                ></Volunteer>)
            }
        </div>
    );
};

export default VolunteerNeedsSection;