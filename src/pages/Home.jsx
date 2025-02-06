import Expert from '../components/Expert'
import Footer from '../components/Footer';
import Consult from '../components/HomeComponents/Consult';
import Services from '../components/HomeComponents/Services';
import Trusted from '../components/HomeComponents/Trusted';
<<<<<<< HEAD
import Feedback from "../components/HomeComponents/Feedback"
import People from '../components/HomeComponents/People';
import Lastest from '../components/HomeComponents/Lastest';
import Wellness from '../components/HomeComponents/Wellness';


=======
import Meet from '../components/HomeComponents/Meet';
import Wellness from '../components/Home/Wellness'
import People from '../components/Home/People'
import Lastest from '../components/Home/Lastest'
import Testimonials from '../components/Home/Feedback';
>>>>>>> e44b4aa7ceed7bf1dd28dc68350cad34d99721c0
const Home = () => {
  return (
    <div className='container mx-auto space-y-20'>
     <Expert/>
    <Trusted/>
    <Meet/>
    <Services/>
    <Consult/>
<<<<<<< HEAD
    <Feedback/>
    <Lastest/>
    <People/>
    <Wellness/>
    <Footer/>
=======
    <Testimonials/>
    <Lastest/>
    <People/>
    <Wellness/>
    
>>>>>>> e44b4aa7ceed7bf1dd28dc68350cad34d99721c0
    </div>
  );
};

export default Home;
