import About from "./features/About";
import { Container } from "./common/Container";
import { Footer } from "./common/Footer";
import { Header} from "./features/Header";
import { Skills } from "./common/Skills";
import { Projects } from "./features/Portfolio";

function PersonalHomepage() {
  return (
    <Container>
      <Header />
      <Skills />
      <About />
      <Projects />
      <Footer />
    </Container>
  );
}

export default PersonalHomepage;
