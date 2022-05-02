import Zodiacs from "../../components/Zodiacs";
import Aztro from "../../components/Aztro";
import "./style.css";

function Home() {
  return (
    <div>
      <section className="startPageSection">
        <Zodiacs />
        <Aztro />
      </section>
    </div>
  );
}

export default Home;
