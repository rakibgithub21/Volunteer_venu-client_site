import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Loading from '../../components/Loading';
import achivement1 from '../../assets/2617511.webp'

const MyHonour = () => {
    const { user } = useContext(AuthContext)
    const [loading, setLoading] = useState(true)

    const [count, setCount] = useState(0)

    useEffect(() => {
        axios.get(`https://b9-a11-serversite.vercel.app/productsCount/${user?.email}`)
            .then(res => {
                console.log(res.data);
                setCount(res.data)
                setLoading(false)

            })
    }, [user])

    console.log(count.count);
    if (loading) {
        return <Loading></Loading>
    }
    if (count.count === 0) {
        return <div className='my-20'>
            <div className='text-center text-lg mx-auto md:w-4/5 lg:w-1/2 space-y-5'>
                <p>You have not yet achieved any notable milestones or accomplishments worthy of recognition in our Volunteer Venue.
                </p>
                <p>If you want to become a <span>Platinum Hero</span> in our Volunteer Venue, you must make minimum 1 volunteer requests.</p>
            </div>
            <div className='text-center mt-5 text-xl'>
                <p> Your Title is <span className='font-bold text-rose-600'>Beginner</span></p>
            </div>

            <div className='flex justify-center'>
                <img src={achivement1} alt="" />
            </div>

        </div>
    }
    else if (count.count > 0 && count.count <= 5) {
        return <div className='my-20'>

            <div className='text-center mt-5 text-xl'>
                <p> Your Title is <span className='font-bold text-rose-600'>Platinum Hero</span></p>
            </div>

            <div className='text-center text-lg mx-auto md:w-4/5 lg:w-1/2 space-y-5'>
                <p>If you want to become a <span>Golden Hero</span> in our Volunteer Venue, you must make minimum 6 volunteer requests.</p>
            </div>

            <div className='flex justify-center'>
                <img src={achivement1} alt="" />
            </div>

        </div>
    } else if (count.count > 5 && count.count < 10) {
        return <div className='my-20'>
            <div className='text-center mt-5 text-xl'>
                <p> Your Title is <span className='font-bold text-rose-600'>Golden Hero</span></p>
            </div>

            <div className='text-center text-lg mx-auto md:w-4/5 lg:w-1/2 space-y-5'>
                <p>If you want to become a <span className='underline'>Diamond Hero</span> in our Volunteer Venue, you must make minimum 10 volunteer requests.</p>
            </div>

            <div className='flex justify-center'>
                <img src={achivement1} alt="" />
            </div>

        </div>
    } else if (count.count >= 10 && count.count < 15) {
        return <div className='my-20'>
            <div className='text-center mt-5 text-xl'>
                <p> Your Title is <span className='font-bold text-rose-600'>Diamond Hero</span></p>
            </div>

            <div className='text-center text-lg mx-auto md:w-4/5 lg:w-1/2 space-y-5'>
                <p>If you want to become a <span className='underline'>Super Man</span> in our Volunteer Venue, you must make minimum 15 volunteer requests.</p>
            </div>

            <div className='flex justify-center'>
                <img src={achivement1} alt="" />
            </div>
            k
        </div>
    } else if (count.count >= 15 && count.count <= 20) {
        return <div className='my-20'>
            <div className='text-center mt-5 text-xl'>
                <p> Your Title is <span className='font-bold text-rose-600'>Super Man</span></p>
            </div>

            <div className='text-center text-lg mx-auto md:w-4/5 lg:w-1/2 space-y-5'>
                <p>If you want to become a <span className='underline'>The Robbin Hood</span>  in our Volunteer Venue, you must make minimum 21 volunteer requests.</p>
            </div>

            <div className='flex justify-center'>
                <img src={achivement1} alt="" />
            </div>
        </div>
    } else {

        return <div className='my-20'>
            <div className='text-center mt-5 text-xl'>
                <p> Your Title is <span className='font-bold text-rose-600'>The Robbin Hood</span></p>
            </div>

            <div className='flex justify-center'>
                <img src={achivement1} alt="" />
            </div>

        </div>
    }






};

export default MyHonour;