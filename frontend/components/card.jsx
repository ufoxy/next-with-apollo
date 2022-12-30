import React from "react";
import Image from "next/image";
import styles from "../styles/Card.module.css"
import { MdCircle } from "react-icons/md"

function Card() {

  const status = "Dead"
  const specie = "Human"

  return (
    <React.Fragment>
      <article className={styles.article}>
          <Image
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            width="280"
            height="280"
            priority={true}
            className={styles.image}
          />
          <div className={styles.info_container}>
            <h2>Rick</h2>
            <div className={styles.flex}>
              <MdCircle color={status === "Alive"?"green":"red"} className={styles.circle} />
              <p>{status} - {specie}</p>
            </div>
          </div>
      </article>
    </React.Fragment>
  );
}

export default Card;
