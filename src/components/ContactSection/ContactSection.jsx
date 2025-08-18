import './ContactSection.css';

const ContactSection = ({ icon: Icon, text, onClick, href }) => {
  const Component = href ? 'a' : 'div';

  return (
    <Component
      className="contact-item"
      onClick={!href ? onClick : undefined}
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
    >
      <span className="contact-icon"><Icon /></span>
      <span>{text}</span>
    </Component>
  );
};

export default ContactSection;
