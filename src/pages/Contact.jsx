import Get from '../components/contact/Get';
// import Map from '../components/contact/Map';
import Footer from "../components/reasurable/Footer";
import Wellness from '../components/Home/Wellness';
import Jumbotron from "../components/reasurable/jumbotrun"

const Contact = () => {
  return (
    <div className='container mx-auto'>
      <Jumbotron 
        title={<>Contact <em>Us</em></>} 
        description="Have questions or need assistance? Reach out to us anytime. At Healthy You, we’re here to provide support and ensure you get the care you deserve."
      />
      <Get />
      <Map />
      <Wellness />
      <Footer />
    </div>
  );
};

export default Contact;
