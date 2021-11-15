import React from "react";
import styles from "./Header.module.scss";
import wreath from "../../images/wreath.png";
import { useNavigate } from "react-router";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.header}
      onClick={() => {
        navigate("/");
      }}
    >
      <div className={styles.logo}>
        <img src={wreath} alt="paragon" />
        <h1>PARAGON</h1>
      </div>
    </div>
  );
};
