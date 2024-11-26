import './App.css';
import {
  Cooking,
  Description,
  Festival,
  Footer,
  Header,
  HomeBaner,
  Hram,
  Mandarin,
  NewYear,
  NewYearBlue,
  Price,
  ProgrammFestival,
  Recomendation,
  Registraition,
  Reviews,
  Slider1,
  Slider2,
  Speakers,
  Vedalife,
  Video,
} from './components';
import * as Styled from './styles';

function App() {
  return (
    <>
      <Header />
      <HomeBaner />
      <Styled.Wrapper>
        <Vedalife />
        <Video />
      </Styled.Wrapper>
      <NewYear />
      <Styled.Wrapper>
        <Festival />
      </Styled.Wrapper>
      <Mandarin />
      <Styled.Wrapper>
        <ProgrammFestival />
      </Styled.Wrapper>

      <NewYearBlue />

      <Speakers />
      <Recomendation />
      <Description />
      <Cooking />
      <Reviews />
      <Hram />
      <Slider1 />
      <Slider2 />
      <Price />
      <Registraition />
      <Footer />
    </>
  );
}

export default App;
