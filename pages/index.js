import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";

import { useQuery } from "@apollo/client";
import INFO_BOOKS from "../src/querys/books";

const API_URL = "http://localhost:3000/api/books"

export default function Home() {

  const { data } = axios({
    url: API_URL,
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      query: `
      query {
        books {
            author
        }
      }
    `
    },
    variables: {}
  }).then(e => console.log(e.data));

  return (<div>
    <p></p>
  </div>);
}
