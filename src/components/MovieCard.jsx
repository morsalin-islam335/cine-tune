/* eslint-disable react/prop-types */

import { getImageUrl } from "../utils/cine-utils";
import CardModals from "./CardModals";
import Star from "./Star";

import { useContext, useState } from "react";
import { MovieContext } from "../context";

import { toast } from "react-toastify";


export default function MovieCard({ movie }) {
  const [showDetailsModal, setShowModals] = useState(false);
  const { cardData, setCardData } = useContext(MovieContext); // it return a tuple

  const handleShowModal = () => {
    setShowModals(true);
  };

  const handleClose = () => {
    setShowModals(false);
  };

  const handleAddToCard = (event, movie) => {
    event.preventDefault();
    const isPreviousAdded = cardData.find(
      (singleMovie) => singleMovie.id === movie.id
    );
    if (!isPreviousAdded) {
      setCardData([...cardData, movie]);
      toast.success(`Added  ${movie.title} to Cart !`, {
        autoClose: 3000,
      });
    } else {
      toast.error(
        `The movie ${movie.title} has been added to the cart already`,
        {
          autoClose: 3000,
        }
      );
    }
  };

  return (
    <>
      {showDetailsModal && (
        <CardModals movie={movie} onCloseClick={handleClose} />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={handleShowModal}>
          <img
            className="w-full object-cover"
            src={getImageUrl(movie.cover)}
            alt=""
          />
        </a>
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">{movie.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
          <div className="flex items-center space-x-1 mb-5">
            <Star totalStar={movie.rating} />
          </div>
          <a
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            href="#"
          >
            <img src="./assets/tag.svg" alt="" />
            <span onClick={(event) => handleAddToCard(event, movie)}>
              ${movie.price} | Add to Cart
            </span>
          </a>
        </figcaption>
      </figure>
    </>
  );
}
