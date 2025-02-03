import HeroAbout from '../components/AboutComponents/HeroAbout';
import WhyChoose from '../components/AboutComponents/WhyChoose';
import Trusted from '../components/HomeComponents/Trusted';
import OurValues from '../components/AboutComponents/OurValues';
import OurMission from '../components/AboutComponents/OurMission';
import Wellness from '../components/Home/Wellness';
import People from '../components/Home/People';
import Testimonials from '../components/Home/Feedback';
const About = () => {
  return (
    <div className=''>
     <HeroAbout/>
     <WhyChoose/>
     <Trusted/>
     <OurValues/>
    <OurMission/>
     <Testimonials/>
     <People/>
     <Wellness/>
   
    </div>
  );
};

export default About;
