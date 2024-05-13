
import { Helmet } from "react-helmet-async";
import Faq from "./Faq";
import Slider from "./Slider";
import VolunteerNeedsSection from "./VolunteerNeedsSection";
import Feedback from "../../components/Feedback";
// import UserComments from "../../components/UserComments";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Volunteer Venue || Home</title>
            </Helmet>
            <Slider></Slider>
            <VolunteerNeedsSection></VolunteerNeedsSection>
            <Faq></Faq>
            <Feedback></Feedback>
            {/* <UserComments></UserComments> */}
        </div>
    );
};

export default Home;