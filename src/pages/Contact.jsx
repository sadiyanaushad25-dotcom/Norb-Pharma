import AnimatedText from "../components/AnimatedText";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import ContactSection from "../components/ContactSection/ContactSection";
import './Contact.css';
import { PHONE_NO, address, MAP_LOCATION, LINKEDIN, NORB_PHARMA } from '../constants/keywords';
import TextReveal from "../components/TextReveal";

export default function Contact() {
  return (
    <div id="contact" style={{margin:"2rem 4rem", position: "relative"}}>
      {/* <AnimatedText> */}
      <section className="contact-section">
      <div className="contact-left">
        <TextReveal
        as="h2"
        text="Contact"
        type="reverse"
        delay={0.04}
        className="contact-title"
      />
        <div className="contact-info">
          <div className="contact-info">
      <ContactSection
        icon={IoCallOutline}
        text={PHONE_NO}
        // onClick={handleCopyPhone}
      />

      <ContactSection
        icon={IoLocationOutline}
        text={address}
      />
 
      <ContactSection
        icon={CiLinkedin}
        text={NORB_PHARMA}
        href={LINKEDIN}
      />
          </div>
        </div>
      </div>

      <div className="contact-right">
        <iframe
            title="Company Location"
            width="100%"
            height="390"
            style={{ border: 0, borderRadius:'1rem'}}
            src={MAP_LOCATION}
            allowFullScreen>
        </iframe>
      </div>
    </section>
    </div>
  );
}
