import Expert from '../components/Expert'
import Footer from '../components/Footer';
import Consult from '../components/HomeComponents/Consult';
import Services from '../components/HomeComponents/Services';
import Trusted from '../components/HomeComponents/Trusted';
import Feedback from "../components/HomeComponents/Feedback"
import People from '../components/HomeComponents/People';
import Lastest from '../components/HomeComponents/Lastest';
import Wellness from '../components/HomeComponents/Wellness';


const Home = () => {
  return (
    <div className='container mx-auto'>
     <Expert/>
    <Trusted/>
    <Services/>
    <Consult/>
    <Feedback/>
    <Lastest/>
    <People/>
    <Wellness/>
    <Footer/>
    </div>
  );
};

export default Home;
