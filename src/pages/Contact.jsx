import Get from '../components/contact/Get';
<<<<<<< HEAD
import Footer from "../components/reasurable/Footer";
import Wellness from '../components/HomeComponents/Wellness';
=======
// import Map from '../components/contact/Map';
import Wellness from '../components/Home/Wellness';
>>>>>>> e44b4aa7ceed7bf1dd28dc68350cad34d99721c0
import Jumbotron from "../components/reasurable/jumbotrun"
import LocationMap from '../components/contact/LocationMap';

const Contact = () => {
  return (
    <div className=''>
      <Jumbotron 
        title={<>Contact <em>Us</em></>} 
        description="Have questions or need assistance? Reach out to us anytime. At Healthy You, we’re here to provide support and ensure you get the care you deserve."
      />
      <Get />
<<<<<<< HEAD
      <LocationMap/>
=======
      {/* <Map /> */}
>>>>>>> e44b4aa7ceed7bf1dd28dc68350cad34d99721c0
      <Wellness />
      
    </div>
  );
};

export default Contact;
