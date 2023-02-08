import { Footer } from "./features/Footer";
import { Header } from "./features/Header";
import { NextSklills } from "./features/NextSkills";
import { Portfolio } from "./features/Portfolio";
import { Skills } from "./features/Skills";

function PersonalHomepage() {
  return (
    <>
      <Header />
      <Skills />
      <NextSklills />
      <Portfolio />
      <Footer />
    </>
  );
}

export default PersonalHomepage;
