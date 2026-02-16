import "./InfoBox.css";

const InfoBox = ({ title, children }) => (
  <div className="card-wrapper">
    <div className="card-heading">{title}</div>
    <div className="card-content">
      {children}
    </div>
  </div>
);

export default InfoBox;
