import Expert from '../components/Expert'
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

    </div>
  );
};

export default Home;
