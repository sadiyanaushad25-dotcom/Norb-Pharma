import AnimatedText from "../components/AnimatedText";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import ContactSection from "../components/ContactSection/ContactSection";
import './Contact.css';

export default function Contact() {
  return (
    <div style={{height:'90vh', padding: "4rem", color: "#fff", position: "relative", overflow:"hidden"}}>
      <AnimatedText id="contact">
      <section className="contact-section">
      <div className="contact-left">
        <h2 className="contact-title">Contact</h2>

        <div className="contact-info">
          <div className="contact-info">
      <ContactSection
        icon={IoCallOutline}
        text="Call me haha"
        // onClick={handleCopyPhone}
      />

      <ContactSection
        icon={IoLocationOutline}
        text="uhmm dont u know? cs i dont!"
      />

      <ContactSection
        icon={CiLinkedin}
        text="LinkedIn"
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14420.568460006143!2d55.55264174938198!3d25.366553115253286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f70078c4a851%3A0xf1079a45d951b255!2zQWwgSGFub3VmIFB1YmxpYyBLaXRjaGVuINmF2LfYqNiuINin2YTZh9mG2YjZgSDYp9mE2LTYudio2Yo!5e0!3m2!1sen!2sae!4v1753950203230!5m2!1sen!2sae"
            allowFullScreen>
        </iframe>
      </div>
    </section>
     </AnimatedText>
    </div>
  );
}
