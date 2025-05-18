import Header from "./components/Header";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import Footer from "./components/footer";
import Exp from "./components/Exp";

function App() {
  return (
    <>
      <Header />
      <main>
        <Aboutme />
        <section className="skills-exp-wrapper">
          <Skills />
          <Exp />
        </section>
      </main>
      <Footer />
    </>
  );
}
export default App;
