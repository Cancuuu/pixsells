import styles from "../styles/Home.module.css";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CustomButton from "./customConnectButton";

const Header = () => {
  return (
    <header className="header">
    <Image
      src="/pixsells-logo.svg"
      alt="logo"
      layout="fixed"
      width="300px"
      height="40px"
    />
    <div className={styles.buttons}>
      <Link href="/canva">
      <button
        style={{
          background: "#F8F8F8",
          border: "4px solid #1061B1",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          width: "200px",
          height: "50px",
          color: "#1061B1",
          fontWeight: "bold",
          margin: "0px 5px",
        }}
      >
        PAINT!
      </button></Link>
      <button
        style={{
          background: "#F8F8F8",
          border: "4px solid #1061B1",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          width: "200px",
          height: "50px",
          color: "#1061B1",
          fontWeight: "bold",
          margin: "0px 5px",
        }}
      >
        <a href="#DAO">DAO</a>
      </button>
      {/* <button
        style={{
          background: "#1061B1",
          border: "4px solid #1061B1",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          width: "200px",
          height: "50px",
          color: "#F8F8F8",
          fontWeight: "bold",
          margin: "0px 5px",
        }}
      >
        CONNECT
      </button> */}
      <CustomButton />
    </div>
  </header>
  )
}

export default Header