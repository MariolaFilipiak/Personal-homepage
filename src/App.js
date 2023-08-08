import PersonalHomepage from "./PersonalHomepage";
import { GlobalStyle } from "./GlobalStyle";
import { Route, Routes } from "react-router-dom";
import MovieBrowser from "./features/Portfolio/Projects/MovieBrowser";
import TheSecondLife from "./features/Portfolio/Projects/TheSecondLife";
import UlotneChwile from "./features/Portfolio/Projects/UlotneChwile";
import ToDoList from "./features/Portfolio/Projects/ToDoList";
import { ScrollToTop } from "./common/ScrollToTop";
import NewsApp from "./features/Portfolio/Projects/NewsApp";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PersonalHomepage />} />
        <Route path="movie-browser" element={<MovieBrowser />} />
        <Route path="the-second-life" element={<TheSecondLife />} />
        <Route path="ulotne-chwile" element={<UlotneChwile />} />
        <Route path="news-app" element={<NewsApp />} />
        <Route path="to-do-list" element={<ToDoList />} />
      </Routes>
    </>
  );
};
