import Zodiacs from "../../components/Zodiacs";
import Aztro from "../../components/Aztro";
import "./style.css";
import Title from "../../components/Title";

function Home() {
  return (
    <div>
      <section className="startPageSection">
        <Title title="Hello"></Title>
        <Zodiacs />
      </section>
    </div>
  );
}

export default Home;
