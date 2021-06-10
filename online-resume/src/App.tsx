import * as React from "react";
import "reset-css";
import "./App.css";
import FrontUi from "./components/header/front-ui";
import Header from "./components/header";
import Pdf from "./assests/resume.pdf";
import Particles from "react-particles-js";
import ContactUs from "./components/contactUs";

const navigation = {
  brand: { name: "Home", to: "/" },
  links: [
    { name: "About Me", to: "/about" },
    { name: "Resume", to: { Pdf } },
    {
      name: "Linked In",
      to: "https://www.linkedin.com/in/akansha-gupta-26125914a/",
    },
    { name: "Contact", to: "/contact" },
  ],
};
const particleConfig: any = {
  particles: {
    color: {
      value: "#014b3e",
    },
    number: {
      value: 160,
      density: {
        enable: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        speed: 4,
        size_min: 0.3,
      },
    },
    line_linked: {
      color: {
        value: "#032825",
      },
      enable: true,
      distance: 300,
      opacity: 0.4,
      width: 2,
    },
    move: {
      random: true,
      direction: "top",
      out_mode: "out",
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "attract",
      },
      onclick: {
        enable: true,
        mode: "repulse",
      },
    },
    modes: {
      bubble: {
        distance: 250,
        duration: 2,
        size: 0,
        opacity: 0,
      },
      repulse: {
        distance: 400,
        duration: 4,
      },
    },
  },
};
const resumeDate = {
  name: "Akansha",
  role: "Software Engineer",
  experience: "",
};
function App() {
  const { brand, links } = navigation;
  return (
    <>
      <Particles params={particleConfig} className="particles" />
      <div className="app_background">
        <Header brand={brand} links={links} />
        <FrontUi resumeDate={resumeDate} />
        {/* <About />
         */}
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
