import { useRef } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";


function App() {
  const sectionRefs = {
    aboutMe: useRef(null),
    skills: useRef(null),
    exp: useRef(null),
    company: useRef(null),
    ContactForm: useRef(null)
  };

  const handleScrollTo = (section) => {
    sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header scrollTo={handleScrollTo} />
      <MainContent refs={sectionRefs} />
      <Footer />
    </>
  );
}

export default App;
