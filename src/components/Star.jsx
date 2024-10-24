/* eslint-disable react/prop-types */
import star from "../assets/star.svg";

export default function Star({ totalStar }) {
  const starImg = Array(totalStar).fill(star);
  return (
    <>
      {starImg.map((imgPath, index) => (
        <img width="14" height="14" key={index} src={imgPath} alt="" />
      ))}
    </>
  );
}
