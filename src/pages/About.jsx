import AnimatedText from "../components/AnimatedText";
import './About.css'

export default function About() {
  const employees = [
  { name: "Kahlid Baig", degree: "Certified Pharmacist & Regulatory Affairs" },
  { name: "Zara Khanam", degree: "Biomedical Engineer & Regulatory Affairs Specialis" },
  { name: "Gowher Mirza", degree: "Mechanical Engineer & DG certified" },
];
  return (
    <div style={{height:'90vh',padding: "4rem", color: "#fff", position: "relative" }}>
      
    <section className="team-intro">
      <AnimatedText id="about">
      <div className="team-header">
        <h2>Meet Our Team</h2>
        <p>
          With over 15 years of experience in handling registrations and
          navigating regulations, we’ve built a track record of success that
          speaks for itself. But behind every achievement is a dedicated team
          committed to getting things right.
        </p>
      </div>

      <div className="team-grid">
        {employees.map((emp, index) => (
          <div className="team-card" key={index}>
            <div className="initial-circle">
              {emp.name.charAt(0)}
            </div>
            <h3>{emp.name}</h3>
            <p>{emp.degree}</p>
          </div>
        ))}
      </div>
      </AnimatedText>
    </section>
      
    </div>
  );
}
