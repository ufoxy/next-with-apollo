import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import rick_and_mort from "../public/rick-and-morty.png";
import logo from "../public/tt.png";
import { VscGithub } from "react-icons/vsc";
import { IoPlanet } from "react-icons/io5";
import { HiRefresh } from "react-icons/hi"
import { TbSearch } from "react-icons/tb"

import Card from "../components/card.jsx";

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
  'Ordem de Aparição', 'A-Z', 'Z-A'
];

const defaultOption = options[0];

export default function Home() {
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
            <button className={styles.button_search} role="button"><TbSearch fontSize={20}/></button>
          </div>

          <div className={styles.dropdown_container}>
            <p className={styles.dropdown_p}>Organizar por:</p>
            <Dropdown options={options} value={defaultOption} placeholder="Select an option" className={styles.dropdown} />
          </div>

        </section>
        <section className={styles.section}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </main>

      <footer className={styles.footer}></footer>
    </React.Fragment>
  );
}
