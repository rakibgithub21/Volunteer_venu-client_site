
import Faq from "./Faq";
import Slider from "./Slider";
import VolunteerNeedsSection from "./VolunteerNeedsSection";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <VolunteerNeedsSection></VolunteerNeedsSection>
            <Faq></Faq>
        </div>
    );
};

export default Home;