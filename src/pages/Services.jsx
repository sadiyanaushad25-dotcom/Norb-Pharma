import ServiceCard from '../components/ServiceCard/ServiceCard'
import AnimatedText from "../components/AnimatedText";
import { service1, service2, service3, service4 } from '../constants/keywords';
import { MdScience } from "react-icons/md";
import './Services.css'

export default function Services() {
  return (
    <div style={{ height:"90vh", padding: "4rem", color: "#fff", position: "relative", overflow:'hidden' }}>
              <div className='services-wrapper'>
      <AnimatedText id="services">  
              <h2>Our Services</h2>
              <section className='service-cards'>
              <ServiceCard
                iconSrc={<MdScience />}
                name="lorem epsum"
                description={service1}
              />         
              <ServiceCard
                iconSrc={<MdScience />}
                name="lorem epsum"
                description={service2}
              />     
              <ServiceCard
                iconSrc={<MdScience />}
                name="lorem epsum"
                description={service3}
              />
              <ServiceCard
                iconSrc={<MdScience />}
                name="lorem epsum"
                description={service4}
              />
              </section>

      </AnimatedText>
                  </div>
    </div>
  );
}

