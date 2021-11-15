import React from "react";
import { ItemCard } from "../item-card/ItemCard";
import styles from "./Items.module.scss";
import holygrail from "../../images/products/holygrail.png";
import spoon from "../../images/products/spoon.png";
import nail from "../../images/products/nail.png";
import monalisa from "../../images/products/mona-lisa.jpg";
import lincoln from "../../images/products/lincoln.jpg";
import jackson from "../../images/products/jackson.jpg";
import keys from "../../images/products/keys.jpg";

export const items = [
  {
    index: 0,
    itemName: "Holy Grail",
    price: "380.00",
    seller: "Sir Galahad",
    description: "Legally taken from the tomb of Sir Arthur Pendragon",
    image: holygrail,
  },
  {
    index: 1,
    itemName: "Keys to Noah's Ark",
    price: "230.00",
    seller: "God",
    description: '"He told us that he bought a Telsa" -God',
    image: keys,
  },
  {
    index: 2,
    itemName: "Napoleon's Spoon",
    price: "405.00",
    seller: "Napoleon Bonaparte",
    description: "Tiny French man's spoon",
    image: spoon,
  },
  {
    index: 3,
    itemName: "The Holy Nail",
    price: "380.00",
    seller: "Sir Galahad",
    description: "Hallelujah!",
    image: nail,
  },
  {
    index: 4,
    itemName: "Mona Lisa's Hot Sister",
    price: "613.00",
    seller: "Leonardo",
    description: "ZAMN! 😍",
    image: monalisa,
  },
  {
    index: 5,
    itemName: "THE ACTUAL ABRAHAM LINCOLN",
    price: "∞",
    seller: "John Wilkes Booth",
    description: "hes dripped out",
    image: lincoln,
  },
  {
    index: 6,
    itemName: "Andrew Jackson Portrait",
    price: "230.00",
    seller: "Anonymous",
    description: "[redacted]",
    image: jackson,
  },
];

export const Items = () => {
  return (
    <div className={styles.items}>
      {items.map((item, index) => {
        return <ItemCard item={item} key={index} />;
      })}
    </div>
  );
};
