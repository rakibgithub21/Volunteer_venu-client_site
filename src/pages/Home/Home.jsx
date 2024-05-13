
import { Helmet } from "react-helmet-async";
import Faq from "./Faq";
import Slider from "./Slider";
import VolunteerNeedsSection from "./VolunteerNeedsSection";
import Feedback from "../../components/Feedback";


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
        </div>
    );
};

export default Home;