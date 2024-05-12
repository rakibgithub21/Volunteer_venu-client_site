
import { Helmet } from "react-helmet-async";
import Faq from "./Faq";
import Slider from "./Slider";
import VolunteerNeedsSection from "./VolunteerNeedsSection";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Volunteer Venue || Home</title>
            </Helmet>
            <Slider></Slider>
            <VolunteerNeedsSection></VolunteerNeedsSection>
            <Faq></Faq>
        </div>
    );
};

export default Home;