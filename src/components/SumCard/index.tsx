import React from "react";

import styles from "./styles.module.css";

interface Props {
  title: string;
  abstract: string;
  authors: string;
  url: string;
}

function SumCard({ title, abstract, authors, url }: Props): JSX.Element {
  return (
    <div className={styles.sumcard_container}>
      <div className={styles.sumcard_title_container}>
        <h3 ><a className={styles.title} href={url}>{title}</a></h3>
        <div className={styles.authors}>{authors}</div>
      </div>
      <div className={styles.sumcard_abstract_container}>
        <b>Abstract</b> <div className={styles.abstract}>{abstract}</div>
      </div>
    </div>
  );
}

export default SumCard;
