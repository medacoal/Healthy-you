import HeroAbout from '../components/AboutComponents/HeroAbout';
import WhyChoose from '../components/AboutComponents/WhyChoose';
import Trusted from '../components/HomeComponents/Trusted';
import OurValues from '../components/AboutComponents/OurValues';
import OurMission from '../components/AboutComponents/OurMission';
import Wellness from '../components/HomeComponents/Wellness';
import People from '../components/HomeComponents/People';
import Testimonials from '../components/HomeComponents/Feedback';
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
