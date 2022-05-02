import React from "react";
import { useParams } from "react-router-dom";
import Aztro from "../../components/Aztro";

// import SearchBar from "./components/Searchbar";

function ZodiacInfo() {
  const { name } = useParams();

  return (
    <div>
      <section className="startPageSection">
        <Aztro name={name} />
      </section>
    </div>
  );
}

export default ZodiacInfo;
