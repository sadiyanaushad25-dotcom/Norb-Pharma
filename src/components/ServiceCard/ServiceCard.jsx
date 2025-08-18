// import './ServiceCard.css';

// function ServiceCard({ icon, title, description }) {
//   return (
//     <div className="service-card">
//       <div className="service-icon">
//         <img src={icon} alt={`${title} icon`} />
//       </div>
//       <h3 className="service-title">{title}</h3>
//       <p className="service-description">{description}</p>
//     </div>
//   );
// }

// export default ServiceCard;

import AnimatedText from '../AnimatedText';
import TextReveal from '../TextReveal';
import './ServiceCard.css';
import { GiCheckMark } from "react-icons/gi";

function ServiceCard({ iconSrc, name, description }) {
  return (
    <div>
    {/* <AnimatedText> */}
    <div className="service-box">
      <div className="icon-circle">
        {/* <img src={iconSrc} alt="icon" className="icon-image" /> */}
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
        className="highlight-text"
      />
    </div>
    </div>
    {/* </AnimatedText> */}
    </div>
  );
}

export default ServiceCard;
