import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import logo from "../public/tt.png";
import { VscGithub } from "react-icons/vsc";
import { IoPlanet } from "react-icons/io5";
import { HiRefresh } from "react-icons/hi";
import { TbSearch } from "react-icons/tb";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../components/card.jsx";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = ["Ordem de Aparição", "A-Z", "Z-A"];
const defaultOption = options[0];
let pages = 1;

export async function getStaticProps() {
  const res = await fetch(
    "https://rick-and-morty-backend.vercel.app/app/characters/1"
  );
  const character = await res.json();

  return {
    props: {
      character,
    },
  };
}

export default function Home({ character }) {
  const [characters, setCharacters] = useState(character.characters);
  const [autoLoad, setAutoLoad] = useState(false)
  let fetchDataTimeout = 0

  function autoLoadFunction() {
    if(autoLoad === false) {
      return <section className={styles.section}>
      {characters.map((e) => (
        <Card
          key={e.id}
          name={e.name}
          image={e.image}
          status={e.status}
          specie={e.species}
        />
      ))}
    </section>
    } else {
      return <InfiniteScroll
      dataLength={characters.length}
      next={fetchData}
      hasMore={true}
      loader={null}
      endMessage={null}
    >
      <section className={styles.section}>
        {characters.map((e) => (
          <Card
            key={e.id}
            name={e.name}
            image={e.image}
            status={e.status}
            specie={e.species}
          />
        ))}
      </section>
    </InfiniteScroll>
    }
  }

  const fetchDataByName = () => {
    
  }

  const fetchData = () => {
    pages++
    setTimeout(async () => {
      const res = await fetch(
        `https://rick-and-morty-backend.vercel.app/app/characters/${pages}`
      );
      console.log(pages)
      const newPosts = await res.json();
      console.log(newPosts)
      setCharacters((character) => [...characters, ...newPosts.characters]);
      fetchDataTimeout = 1300
    }, fetchDataTimeout);
  };

  return (
    <React.Fragment>
      <header className={styles.header}>
        <nav className={styles.nav}>
          {" "}
          <h1 className={styles.h1_logo}>
            <Image src={logo} width={200} className={styles.h1_logo} />
          </h1>
          <div className={styles.nav_buttons}>
            <IoPlanet className={styles.planet_icon}></IoPlanet>

            <VscGithub className={styles.github_icon}></VscGithub>
          </div>
        </nav>
        <div className={styles.background}>
          <div className={styles.background_blur}></div>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.section_search}>
          <div className={styles.search_container}>
            <button className={styles.button} role="button">
              <HiRefresh fontSize={20}></HiRefresh>
              Surprise Me!
            </button>
            <input
              type="search"
              name="search"
              id=""
              className={styles.search_bar}
              placeholder="Search"
            />
            <button className={styles.button_search} role="button">
              <TbSearch fontSize={20} />
            </button>
          </div>

          <div className={styles.dropdown_container}>
            <p className={styles.dropdown_p}>Organizar por:</p>
            <Dropdown
              options={options}
              value={defaultOption}
              placeholder="Select an option"
              className={styles.dropdown}
            />
          </div>
        </section>
        <div className={styles.section_ct_container}>
          {autoLoadFunction()}
          <button className={styles.button} style={{ width: "200px" }} onClick={() => setAutoLoad(true)}>
            Load more
          </button>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </React.Fragment>
  );
}
