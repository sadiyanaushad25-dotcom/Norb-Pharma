import TextReveal from '../TextReveal';
import './ServiceCard.css';
import { GiCheckMark } from "react-icons/gi";

function ServiceCard({ iconSrc, name, description }) {
  return (
    <div>
    <div className="service-box">
      <div className="icon-circle">
        <div className="icon-image">{iconSrc}</div>
      </div>
      <div className="name-text">{name}</div>
      <div className="desc-text">
        <GiCheckMark className='desc-icon'/>
        <TextReveal
        as="p"
        text={description}
        type="wave"
        delay={0.04}
      />
    </div>
    </div>
    </div>
  );
}

export default ServiceCard;
