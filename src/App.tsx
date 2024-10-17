import 'swiper/css'; // Não se esqueça de importar os estilos do Swiper
import Header from './componentes/Header';
import About from './componentes/About';
import Projetos from './componentes/Projetos';
import Contatos from './componentes/Contatos';
import Tecnologias from './componentes/Tecnologias';


function App() {
  return (
    
    <div className="App">
      <Header />

      {/* Seção "Sobre" */}
      <section id="about" className="about-section">
      <About />
      </section>


      {/* Seção "Tecnologias" */}
      <section id="tecnologias" className="tecnologias-section">
      <Tecnologias />
      </section>

      {/* projetos */}
      <section id="projects" className="projects-section">
        <Projetos />
      </section>

      {/* Seção "Contato" */}
      <section id="contact" className="contact-section">
        <Contatos />
      </section>
    </div>
    
  );
}

export default App;
