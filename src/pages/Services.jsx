import ServiceCard from '../components/ServiceCard/ServiceCard'
import { service1, service2, service3, service4, vision } from '../constants/keywords';
import { HiBuildingOffice } from "react-icons/hi2";
import { FaTachographDigital } from "react-icons/fa6";
import { HiTruck } from "react-icons/hi2";
import { FaFileSignature } from "react-icons/fa";
import './Services.css'
import TextReveal from '../components/TextReveal';

export default function Services() {
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
        <section className='service-cards'>
        <ServiceCard
          iconSrc={<HiBuildingOffice size={25} />}
          name=""
          description={service1}
        />         
        <ServiceCard
          iconSrc={<FaTachographDigital size={25} />}
          name=""
          description={service2}
        />    
        <ServiceCard
          iconSrc={<HiTruck size={25} />}
          name=""
          description={service3}
        />
        <ServiceCard
          iconSrc={<FaFileSignature size={25} />}
          name=""
          description={service4}
        />
        </section>
      </div>
    </div>
  );
}

