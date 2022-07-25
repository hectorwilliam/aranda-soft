import HeaderMovil from "../../Components/Header/headerMovil";
import Prescriptions from "../../Components/Prescriptions";
import useWindowDimensions, { DimensionsResize } from "../../Hooks/useWindowDimensions";

function Home() {
  const { height, width } = useWindowDimensions();

  return (
    <>
      <div className="styleImageHomeMain">
        <h1>Recetas<br /> <span>Para todos</span></h1>
      </div>
      {width < DimensionsResize.tablet.max &&
        <HeaderMovil />
      }
      <Prescriptions />
    </>
  );
}

export default Home;
