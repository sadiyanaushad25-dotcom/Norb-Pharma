import AnimatedText from "../components/AnimatedText";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

export default function Home() {
  return (
    <div style={{height:"90vh", padding: "4rem", color: "#fff", position: "relative" }}>
      <AnimatedText id="home">
        <h1>Welcome to Our Landing Page</h1>
        <p>We innovate and create amazing experiences.</p>
      </AnimatedText>
    </div>
  );
}
