import Card from "../../components/card/Card";
import { useGlobalContext } from "../../context";
import "./Gallery.css";
function Gallery() {
  const { info } = useGlobalContext();
  return (
    <div className="gallery">
      {info.map((item) => (
        <Card name={item.name} image={item.image} key={item.id} id={item.id} />
      ))}
    </div>
  );
}

export default Gallery;
