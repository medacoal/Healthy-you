import Get from '../components/contact/Get';
import Footer from "../components/reasurable/Footer";
import Wellness from '../components/HomeComponents/Wellness';
import Jumbotron from "../components/reasurable/jumbotrun"
import LocationMap from '../components/contact/LocationMap';

const Contact = () => {
  return (
    <div className='container mx-auto'>
      <Jumbotron 
        title={<>Contact <em>Us</em></>} 
        description="Have questions or need assistance? Reach out to us anytime. At Healthy You, we’re here to provide support and ensure you get the care you deserve."
      />
      <Get />
      <LocationMap/>
      <Wellness />
      <Footer />
    </div>
  );
};

export default Contact;
