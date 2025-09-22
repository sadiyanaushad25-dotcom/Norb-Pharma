import "./InfiniteScroll.css"

const InfiniteScroll = ({ services, start = "left" }) => {
  return (
    <div className={`services-container ${start === "right" ? "left-right" : "right-left"}`}>
      <div className="services-track">
        {services.map((service, index) => (
          <div key={index} className="service-box-mobile">
            <div className="service-icon">{service.icon}</div>
            <div className="service-text">{service.description}</div>
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {services.map((service, index) => (
          <div key={`dup-${index}`} className="service-box-mobile">
            <div className="service-icon">{service.icon}</div>
            <div className="service-text">{service.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;
