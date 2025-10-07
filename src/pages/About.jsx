import {about_us} from "../constants/keywords"
import TextReveal from "../components/TextReveal";
import './About.css'

export default function About() {
  const employees = [
  { name: "Kahlid Baig", degree: "Certified Pharmacist & Regulatory Affairs", img:"/kahlid_baig.webp" },
  { name: "Zara Khanam", degree: "Biomedical Engineer & Regulatory Affairs Specialis", img:"/zara_khanam.webp" },
  { name: "Gowher Mirza", degree: "Mechanical Engineer & DG certified", img:"/gowher_mirza.webp" },
  { name: "Sufyan Baig", degree: "Digital marketing expert", img:"/sufyan_baig.webp" },
];
  return (
    <div>
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
          {about_us}
        </p>
      </div>

      <div className="team-grid">
        {employees.map((emp, index) => (
          <div className="team-card" key={index}>
            <div className="initial-circle">
              {/* {emp.name.charAt(0)} */}
               <img
                src={emp.img}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </div>
              <TextReveal
                as="h3"
                text={emp.name}
                type="wave"
                delay={0.08}
                className="team-names"
              />
            <p>{emp.degree}</p>
          </div>
        ))}
      </div>
    </section>  
    </div>
  );
}
