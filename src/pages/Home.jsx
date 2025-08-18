import AnimatedText from "../components/AnimatedText";
import TextReveal from "../components/TextReveal";
import {landing_page_1, landing_page_2} from "../constants/keywords"
import "./Home.css"
export default function Home() {
  return (
    <div id="home" style={{ color: "#fff", position: "relative", minHeight:"70vh" }}>
      <div className="home_wrapper">
        <TextReveal
        as="h1"
        text="Welcome to Our Landing Page"
        type="waterfall"
        delay={0.04}
        className="landing_page_heading"
      />
        <p>{landing_page_1}</p>
        <p>{landing_page_2}</p>
      </div>
    </div>
  );
}
