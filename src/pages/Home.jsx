import Expert from '../components/Expert'
import Footer from '../components/Footer';
import Consult from '../components/HomeComponents/Consult';
import Services from '../components/HomeComponents/Services';
import Trusted from '../components/HomeComponents/Trusted';
const Home = () => {
  return (
    <div className='container mx-auto'>
     <Expert/>
    <Trusted/>
    <Services/>
    <Consult/>
    <Footer/>
    </div>
  );
};

export default Home;
