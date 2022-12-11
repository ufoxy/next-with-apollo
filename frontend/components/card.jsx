import React from "react";
import Image from "next/image";
import styles from "../styles/Card.module.css"

function Card() {
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
            <p>Alive - Human</p>
          </div>
      </article>
    </React.Fragment>
  );
}

export default Card;
