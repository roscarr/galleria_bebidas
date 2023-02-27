import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../../context";
import "./Detail.css";
function Detail() {
  const { info } = useGlobalContext();
  const { id } = useParams();
  const [task, setTask] = useState({
    id: "",
    name: "",
    image: "",
    info: "",
    glass: "",
    ingredient: [],
    instructions: "",
  });
  useEffect(() => {
    const newcocktail = info.find((cocktail) => cocktail.id === id);
    if (newcocktail) {
      setTask(newcocktail);
    }
  }, [id, info]);
  return (
    <div className="detail">
      <div className="detail__header">
        <Link className="detail__subTitle" to="/">
          back home
        </Link>
        <h2 className="detail__mainTitle">{task.name}</h2>
      </div>
      <div className="detail__main">
        <img src={task.image} alt="" />
        <div className="detail__info">
          <p>
            <span className="detail__title">name : </span>
            {task.name}
          </p>
          <p>
            <span className="detail__title">info :</span> {task.info}
          </p>
          <p>
            <span className="detail__title">glass :</span> {task.glass}
          </p>
          <p>
            <span className="detail__title">instructions :</span>{" "}
            {task.instructions}
          </p>
          <p className="detail__list">
            <span className="detail__title">ingredient : </span>
            {task.ingredient.map((item, index) => {
              return item ? <span key={index}>{item}</span> : null;
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
