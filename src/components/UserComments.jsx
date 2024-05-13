import { useEffect, useState } from "react";
import SingleComment from "./SingleComment";


const UserComments = () => {
    const [comments, setComments] = useState([])
    
    useEffect(() => {
        fetch('fake.json')
            .then(res => res.json())
            .then(data => {
            setComments(data)
        })
    },[])
    return (
        <div className='mt-20'>
            <h3 className='text-center text-3xl font-roboto font-medium'>Some valuable comment of our user</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 container mx-auto">
                {
                    comments.map(comment => <SingleComment
                    
                        key={comment.id}
                        comment={comment}
                    ></SingleComment>)
                }
            </div>
        </div>
    );
};

export default UserComments;