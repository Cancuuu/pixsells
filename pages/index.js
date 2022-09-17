import styles from "../styles/Home.module.css";
import Image from "next/image";
import Head from "next/head";
import { handleSubmitNewPixel } from "../lib/socket";
import CustomButton from "../components/customConnectButton";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/rainbow.png" />
      </Head>
      <div className={styles.container}>
        <Image
          src="/grid-background.png"
          alt="logo"
          layout="fill"
          width="100%"
          height="100%"
          style={{ opacity: 0.08 }}
        />
        <main className="main">
          <header className="header">
            <Image
              src="/pixsells-logo.svg"
              alt="logo"
              layout="fixed"
              width="300px"
              height="40px"
            />
            <div className={styles.buttons}>
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
              </button>
              <button
                onClick={() => handleSubmitNewPixel()}
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
          <div className={styles.home_container}>
            <div className={styles.text_div}>
              <video src="/canvas_live.mp4" autoPlay />
            </div>
            <Image
              src="/paint-with-us.svg"
              alt="paint with us"
              width="400px"
              height="40px"
              className="paint-with"
            />
          </div>
          <div className={styles.subtitle}>
            <h3
              style={{
                color: "#1061B1",
                fontSize: "30px",
                margin: "25px",
              }}
            >
              <strong>DISPLAY YOUR CREATIVITY & HELP OTHERS GROW</strong>
            </h3>
          </div>
        </main>
        <section style={{ margin: "25px 125px" }} id="DAO">
          <div className={styles.title}>
            <h1
              style={{
                color: "#1061B1",
                fontSize: "55px",
                margin: "25px",
                fontWeight: "bold",
              }}
            >
              WHAT IS
            </h1>
            <Image
              src="/pixsells-logo.svg"
              alt="logo"
              layout="fixed"
              width="300px"
              height="40px"
            />
            <h1
              className="h1"
              style={{
                color: "#1061B1",
                fontSize: "55px",
                margin: "25px",
                fontWeight: "bold",
              }}
            >
              ?
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ width: "50%", margin: "25px" }}>
              <p
                style={{
                  color: "#1061B1",
                  fontSize: "25px",
                  lineHeight: "1.5",
                }}
              >
                At Pixsells we strongly believe that the onboarding of new users
                to Web3 is greatly accelerated with the support of communities.
                <br></br>
                <br></br>
                As a DAO, our mission is to integrate crypto enthusiasts into
                the ecosystem by supporting them financially, also including
                them in the governance of the DAO for future decisions.
              </p>
            </div>
            <div style={{ marginRight: "150px" }}>
              <Image
                src="/rainbow.png"
                alt="rainbow"
                layout="fixed"
                width="250px"
                height="200px"
              />
            </div>
          </div>
        </section>
        <section style={{ margin: "100px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ marginLeft: "150px" }}>
              <Image
                src="/dollar.png"
                alt="dollar"
                layout="fixed"
                width="250px"
                height="250px"
              />
            </div>
            <div style={{ width: "50%", margin: "25px" }}>
              <h1
                className="h1"
                style={{
                  color: "#1061B1",
                  fontSize: "55px",
                  margin: "25px 0px",
                  fontWeight: "bold",
                }}
              >
                HOW DO WE DO IT?
              </h1>
              <p
                style={{
                  color: "#1061B1",
                  fontSize: "25px",
                  lineHeight: "1.5",
                }}
              >
                Through the sale of the $PAINT token we fund the DAO, which will
                use the funds for its mission.
                <br></br>
                <br></br>
                In turn, those who acquire the token will have the power to
                paint on a live canvas that allows them to participate in the
                design of a collectible NFT that in turn will reward them the
                more they participate painting!
              </p>
            </div>
          </div>
        </section>
        <footer
          style={{
            backgroundColor: "#1061B1",
            height: "80px",
            width: "100%",
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "150px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Image
              src="/facebook.png"
              alt="facebook"
              layout="fixed"
              width="25px"
              height="25px"
            />
            <Image
              src="/instagram.png"
              alt="instagram"
              layout="fixed"
              width="25px"
              height="25px"
            />
            <Image
              src="/twitter.png"
              alt="twitter"
              layout="fixed"
              width="25px"
              height="25px"
            />
          </div>
        </footer>
      </div>
    </div>
  );
}
