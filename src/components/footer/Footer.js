import React from "react";
import { SocialIconButton } from "../social-icon-btn/SocialIconButton";
import styles from "./Footer.module.scss";

import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.info}>
        <h1>PARAGON &#8482;</h1>
        <pre>All rights reserved 2021. seiferalbacete@gmail.com</pre>

        <h2>Find me here</h2>
        <div className={styles.socials}>
          <SocialIconButton
            name="GitHub"
            icon={faGithub}
            href="https://github.com/SyferDev"
          />
          <SocialIconButton
            name="Twitter"
            icon={faTwitter}
            href="https://twitter.com/zippp___"
          />
        </div>
      </div>

      <div className={styles.contact}>
        <h1>Contact Me</h1>
        <form>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
          />
          <label htmlFor="contact">Reason for contact</label>
          <textarea id="contact" multiple placeholder="Reason for contact" />
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Contact
          </button>
        </form>
      </div>
    </div>
  );
};
