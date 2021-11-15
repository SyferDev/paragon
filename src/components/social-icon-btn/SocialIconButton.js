import React from "react";
import styles from "./SocialIconButton.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SocialIconButton = ({ name, icon, href }) => {
  return (
    <div className={styles.button}>
      <a href={href} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={icon} />
        <p>{name}</p>
      </a>
    </div>
  );
};
