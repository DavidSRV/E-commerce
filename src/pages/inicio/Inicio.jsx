import Card from "../../components/card/Card";
import Slider from "../../components/slider/Slider";
import "./Inicio.scss";

export default function Inicio() {
  
  return (
    <main className="inicio-container">
      <section className="section1">
        <Card />
      </section>
      <section className="section2">
        <Slider/>
      </section>
    </main>
  );
}
