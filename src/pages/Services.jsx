import ServiceCard from '../components/ServiceCard/ServiceCard'
import { service1, service2, service3, service4, vision } from '../constants/keywords';
import { motion } from "framer-motion";
import { HiBuildingOffice } from "react-icons/hi2";
import { FaTachographDigital } from "react-icons/fa6";
import { HiTruck } from "react-icons/hi2";
import { FaFileSignature } from "react-icons/fa";
import './Services.css'
import TextReveal from '../components/TextReveal';
import useIsMobile from '../Hooks/useIsMobile';

export default function Services() {
  const isMobile = useIsMobile(768);

  const services = [
    { icon: <HiBuildingOffice size={25} />, description: service1 },
    { icon: <FaTachographDigital size={25} />, description: service2 },
    { icon: <HiTruck size={25} />, description: service3 },
    { icon: <FaFileSignature size={25} />, description: service4 },
  ];

  return (
    <div id="services" style={{color: "#fff", position: "relative", overflow:'hidden' }}>
      <div className='services-wrapper'>
        <TextReveal
        as="h2"
        text="Our Services"
        type="reverse"
        style={{textWrap:"nowrap"}}
        delay={0.04}
        className="services-wrapper-h2"
      />
      <p className='vision'>{vision}</p>
      {isMobile ? 
    <div className="mobile-services">
      {services.map((service, index) => (
        <div
          key={index}
          className={`service-box-mobile ${index < 2 ? "scroll-right" : "scroll-left"}`}
        >
          <div className="service-icon">{service.icon}</div>
          <div className="service-text">{service.description}</div>
        </div>
      ))}
    </div>
      :
        <section className='service-cards'>
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          iconSrc={service.icon}
          name=""
          description={service.description}
        />
      ))}
        </section>
}
      </div>
    </div>
  );
}

