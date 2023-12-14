import React, { useEffect } from "react";
import { Wrap } from "./style";
import img from "../../../assets/images/card.jpg";
import { NavLink } from "react-router-dom";
export default function Card({ data }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const url = process.env.REACT_APP_URL;

  return (
    <Wrap>
      <div className="image">
        <div className="price">{data?.price}</div>
        <img src={data?.image} alt="card_image" />
      </div>
      <div className="card_content">
        <h3>{data?.title}</h3>
        <p>{data?.description}</p>
        <div>
          <NavLink to={`/our-courses/${data?._id}`}>LEARN MORE</NavLink>
        </div>
      </div>
    </Wrap>
  );
}
