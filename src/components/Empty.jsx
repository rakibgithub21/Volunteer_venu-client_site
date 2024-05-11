import { Link } from "react-router-dom";

import data from '../assets/ab0a2fad-2f7d-4c66-8fd2-d79a8bb19374.png';

const Empty = () => {
    return (
        <div className="flex justify-center items-center flex-col h-screen">
            <img className="w-[320px]" src={data} alt="" />
            <Link className="btn btn-secondary btn-outline" to={'/'}>Go Back</Link>
        </div>
    );
};

export default Empty;