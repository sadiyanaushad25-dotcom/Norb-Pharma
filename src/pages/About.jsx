import TextReveal from "../components/TextReveal";
import './About.css'

export default function About() {
  const employees = [
  { name: "Kahlid Baig", degree: "Certified Pharmacist & Regulatory Affairs" },
  { name: "Zara Khanam", degree: "Biomedical Engineer & Regulatory Affairs Specialis" },
  { name: "Gowher Mirza", degree: "Mechanical Engineer & DG certified" },
];
  return (
    <div style={{ color: "#fff", position: "relative" }}>
      
    <section className="team-intro"  id="about">
      <div className="team-header">
        <TextReveal
        as="h2"
        text="Meet Our Team"
        type="reverse"
        delay={0.04}
        className="team-header-h2"
      />

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
              <TextReveal
                as="h3"
                text={emp.name}
                type="wave"
                delay={0.08}
                className="highlight-text"
              />
            <p>{emp.degree}</p>
          </div>
        ))}
      </div>
    </section>
      
    </div>
  );
}
