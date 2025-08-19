import TextReveal from '../TextReveal';
import './ServiceCard.css';
import { GiCheckMark } from "react-icons/gi";
import { motion } from "framer-motion";

function ServiceCard({ iconSrc, name, description }) {
  return (
    <div>
    <div className="service-box">
      <div className="icon-circle">
        <motion.div
          initial="hidden"
          whileInView="visible"
          className="icon-image"
          variants={{
            hidden: { y: "-120%", opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { delay: 0.2, duration: 0.8, ease: "easeInOut" }
            },
          }}
        >
          <div >{iconSrc}</div>
        </motion.div>
      </div>
      <div className="name-text">{name}</div>
      <div className="desc-text">
        <GiCheckMark className='desc-icon'/>
        <TextReveal
        as="p"
        text={description}
        type="reverse"
        delay={0.04}
      />
    </div>
    </div>
    </div>
  );
}

export default ServiceCard;
