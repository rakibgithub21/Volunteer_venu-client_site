import { useEffect, useState } from "react";
import SingleComment from "./SingleComment";
import axios from "axios";
import { Link } from "react-router-dom";


const UserComments = () => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        axios('http://localhost:5000/feedback')
            .then(res => {
                setComments(res.data)
            })
    }, [])
    return (
        <div className='mt-20'>
            <h3 className='text-center text-3xl font-roboto font-medium'>Some valuable comment of our user</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 container mx-auto">
                {
                    comments.map(comment => <SingleComment

                        key={comment._id}
                        comment={comment}
                    ></SingleComment>)
                }
            </div>

            <div className="flex justify-center my-5">
                <Link to={'/all-comments'}><button className="btn btn-link ">Se All Comments</button></Link>
            </div>
        </div>
    );
};

export default UserComments;