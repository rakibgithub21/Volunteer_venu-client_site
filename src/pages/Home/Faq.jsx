import { Link } from 'react-router-dom';
import faq from '../../assets/undraw_questions_re_1fy7.svg';
import { useState } from 'react';
const Faq = () => {

    const [showMore, setShowMore] = useState(false)
    // console.log(showMore);

    return (
        <div className='grid lg:grid-cols-5 gap-5 mt-20 mb-20 px-2'>
           
            <div data-aos="fade-right" data-aos-duration="1000" className=' lg:col-span-2 mb-14 lg:mb-0'>
                <img className='w-full h-full rounded-md' src={faq} alt="" />
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" className="px-2 space-y-2 lg:col-span-3 flex flex-col justify-center">
                <h3 className='text-3xl font-semibold font-roboto text-center  mb-5'>People Also Search This</h3>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        How do I create a volunteer need post?
                    </div>
                    <div className="collapse-content">
                        <p> To create a volunteer need post, you need to navigate to the "Add Volunteer Post" page from the navbar. Fill out the form with details such as thumbnail, post title, description, category, location, number of volunteers needed, and deadline. Once you submit the form, your volunteer need post will be added to the platform.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Can I update or delete a volunteer need post after it's been posted?
                    </div>
                    <div className="collapse-content">
                        <p> Yes, as the creator of a volunteer need post, you have the ability to update or delete it. Navigate to the "Manage My Post" page from the navbar, where you'll see a list of posts you've added. From there, you can select the post you want to update or delete and take the appropriate action.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        How can I volunteer for a post created by someone else?
                    </div>
                    <div className="collapse-content">
                        <p>To volunteer for a post created by someone else, simply navigate to the "Need Volunteer" page from the navbar. Here, you'll find a list of volunteer need posts created by other users. Click on the "View Details" button of the post you're interested in, which will take you to the details page. From there, you can click on the "Be a Volunteer" button to submit your request.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        What happens after I submit a volunteer request?
                    </div>
                    <div className="collapse-content">
                        After you submit a volunteer request for a specific post, the organizer of that post will receive your request. They'll review your request and may reach out to you for further details. Once accepted, you'll be notified and provided with more information about the volunteering opportunity.

                    </div>
                </div>
                <div className={`${showMore ? 'block' :'hidden'} space-y-2`}>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Is there a limit to the number of volunteer requests I can submit?
                        </div>
                        <div className="collapse-content">
                            No, there's no limit to the number of volunteer requests you can submit. Feel free to volunteer for as many posts as you're interested in and able to commit to. Your willingness to help is greatly appreciated!

                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            How can I switch between dark and light themes on the website?
                        </div>
                        <div className="collapse-content">
                            You can toggle between dark and light themes by clicking on the theme toggle button in the navbar. This feature allows you to customize your browsing experience based on your preference for dark or light colors.

                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            What should I do if I encounter an issue while using the website?
                        </div>
                        <div className="collapse-content">
                            If you encounter any issues or have questions while using the website, please don't hesitate to reach out to our support team. You can contact us through the provided contact information in the footer or by sending an email to support@example.com. We're here to help resolve any concerns and ensure you have a smooth experience on our platform.

                        </div>
                    </div>

                </div>

                {
                    showMore ? <div className='text-center '>
                        <Link><button onClick={() => setShowMore(!showMore)} href="#_" className="relative mt-10 rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span className="relative">Show Less Faq...</span>
                        </button></Link>
                    </div> : <div className='text-center '>
                        <Link><button onClick={() => setShowMore(!showMore)} href="#_" className="relative mt-10 rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span className="relative">Show More Faq...</span>
                        </button></Link>
                    </div>
                }
               
                


            </div>

        </div>
    );
};

export default Faq;