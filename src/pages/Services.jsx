import ServiceCard from '../components/ServiceCard/ServiceCard'
import AnimatedText from "../components/AnimatedText";
import { service1, service2, service3, service4 } from '../constants/keywords';
import { MdScience } from "react-icons/md";
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
        <section className='service-cards'>
        <ServiceCard
          iconSrc={<MdScience />}
          name=""
          description={service1}
        />         
        <ServiceCard
          iconSrc={<MdScience />}
          name=""
          description={service2}
        />     
        <ServiceCard
          iconSrc={<MdScience />}
          name=""
          description={service3}
        />
        <ServiceCard
          iconSrc={<MdScience />}
          name=""
          description={service4}
        />
        </section>
      </div>
    </div>
  );
}

