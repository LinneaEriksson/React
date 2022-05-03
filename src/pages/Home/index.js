import Zodiacs from "../../components/Zodiacs";
import Aztro from "../../components/Aztro";
import "./style.css";
import Title from "../../components/Title";

function Home() {
  return (
    <div>
      <section className="startPageSection">
        <div className="titleWrapper">
          <Title title="Your daily horoscope"></Title>
        </div>
        <div className="zodiacWrapper">
          <Zodiacs />
        </div>
      </section>
    </div>
  );
}

export default Home;
