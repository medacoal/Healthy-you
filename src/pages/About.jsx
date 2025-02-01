import HeroAbout from '../components/AboutComponents/HeroAbout';
import WhyChoose from '../components/AboutComponents/WhyChoose';
import Trusted from '../components/HomeComponents/Trusted';
import OurValues from '../components/AboutComponents/OurValues';
import Services from '../components/HomeComponents/Services';
import Meet from '../components/HomeComponents/Meet';
import Footer from '../components/Footer';
const About = () => {
  return (
    <div className='container mx-auto'>
     <HeroAbout/>
     <WhyChoose/>
     <Trusted/>
     <OurValues/>
     <Services/>
     <Meet/>
     <Footer/>
    </div>
  );
};

export default About;
