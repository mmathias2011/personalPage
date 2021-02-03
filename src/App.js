import './App.css';
import Contato from './Components/Contato';
import Footer from './Components/Footer';
import Header from './Components/Header';
import SectionCurriculo from './Components/SectionCurriculo';
import Skills from './Components/Skills';
import Sobre from './Components/Sobre'

function App() {
  return (
    <>
    <Header />
    <SectionCurriculo />
    <Sobre />
    <Skills />
    <Contato />
    <Footer />
    </>
  );
}

export default App;
