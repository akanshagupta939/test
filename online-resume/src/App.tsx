import * as React from "react";
import "reset-css";
import "./App.css";
import FrontUi from "./components/header/front-ui";
import Header from "./components/header";
import Pdf from "./assests/resume.pdf";

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
const resumeDate = {
  name: "Akansha",
  role: "Software Engineer",
  experience: "2 years and 8 months",
};
function App() {
  const { brand, links } = navigation;
  return (
    <>
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
