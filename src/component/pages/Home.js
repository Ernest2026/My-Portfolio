import React, { useLayoutEffect, useState } from "react";
import About from "../About";
import Banner from "../Banner";
import Contact from "../Contact";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Portfolio from "../Portfolio";
import Services from "../Services";

function Home() {
  const [device, setDevice] = useState();

  useLayoutEffect(() => {
    checkDevice();
  }, []);

  const checkDevice = () => {
    if (window.innerWidth <= 760) {
      setDevice(true);
    } else {
      setDevice(false);
    }
  };

  window.addEventListener("resize", checkDevice);

  return (
    <>
      <Navbar theme="dark" device={device} />
      <Banner theme="dark" device={device} />
      <About theme="dark" device={device} />
      <Services theme="dark" device={device} />
      <Portfolio theme="dark" device={device} />
      <Contact theme="dark" device={device} />
      <Footer theme="dark" device={device} />
    </>
  );
}

export default Home;
