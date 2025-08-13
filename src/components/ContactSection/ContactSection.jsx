import './ContactSection.css'
const ContactSection = ({ icon: Icon, text, onClick }) => {
  return (
    <div className="contact-item" onClick={onClick}>
      <span className="contact-icon"><Icon /></span>
      <span>{text}</span>
    </div>
  );
};

export default ContactSection;
