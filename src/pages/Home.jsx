import Expert from '../components/Expert'
import Footer from '../components/Footer';
import Consult from '../components/HomeComponents/Consult';
import Services from '../components/HomeComponents/Services';
import Trusted from '../components/HomeComponents/Trusted';
import Meet from '../components/HomeComponents/Meet';
import Wellness from '../components/Home/Wellness'
import People from '../components/Home/People'
import Lastest from '../components/Home/Lastest'
import Testimonials from '../components/Home/Feedback';
const Home = () => {
  return (
    <div className='container mx-auto space-y-20'>
     <Expert/>
    <Trusted/>
    <Meet/>
    <Services/>
    <Consult/>
    <Testimonials/>
    <Lastest/>
    <People/>
    <Wellness/>
    
    </div>
  );
};

export default Home;
