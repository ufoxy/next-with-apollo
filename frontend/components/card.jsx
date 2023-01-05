import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Card.module.css";
import { MdCircle } from "react-icons/md";

function Card({ name, image, status, specie }) {
  if (name.length > 16) {
    let nm = name.split(" ").shift();
    const abv = name.split(" ").filter((e) => (e == nm ? false : true));
    abv.map((e) => (nm += ` ${e.substr(0, 1)}.`));
    name = nm;
  } // Abrevia nomes grandes

  return (
    <React.Fragment>
      <article className={styles.article}>
        <div className={styles.image_div}>
          <Image
            src={image}
            width="280"
            height="280"
            priority={true}
            className={styles.image}
          />
        </div>
        <div className={styles.info_container}>
          <h2>{name}</h2>
          <div className={styles.flex}>
            <MdCircle
              color={status === "Alive" ? "green" : "red"}
              className={styles.circle}
            />
            <p>
              {status} - {specie}
            </p>
          </div>
        </div>
      </article>
    </React.Fragment>
  );
}

export default Card;
