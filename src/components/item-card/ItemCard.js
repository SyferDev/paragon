import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./ItemCard.module.scss";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import useSound from "use-sound";
import choir from "../../sounds/choir.mp3";
import { useNavigate } from "react-router";

export const ItemCard = ({ item }) => {
  const { image, itemName, seller, price, index } = item;

  const navigate = useNavigate();

  const [play, { stop }] = useSound(choir, { volume: 0.1 });

  return (
    <div
      className={styles.itemCard}
      onClick={() => {
        stop();
        navigate(`/item/${index}`);
      }}
      onMouseEnter={() => {
        play();
      }}
      onMouseLeave={() => {
        stop();
      }}
    >
      <div className={styles.itemImage}>
        <img src={image} alt="" />
      </div>

      <div className={styles.itemInfo}>
        <h1>{itemName}</h1>
        <h2>@{seller}</h2>

        <div className={styles.itemPrice}>
          <FontAwesomeIcon icon={faEthereum} size={"lg"} />
          <h1>{price}</h1>
        </div>
      </div>
    </div>
  );
};
