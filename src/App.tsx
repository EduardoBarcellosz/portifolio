import { Button } from './Button';
import 'swiper/css'; // Não se esqueça de importar os estilos do Swiper
import Header from './componentes/Header';
import About from './componentes/About';
import Projetos from './componentes/Projetos';


function App() {
  return (
    <div className="App">
      {/* Cabeçalho */}
      <Header />


      {/* Seção "Sobre" */}
      <section id="about" className="about-section">
      
      <About />


      </section>







      {/* projetos */}
      <section id="projects" className="projects-section">
        {/* Conteúdo do slide/carrossel */}


        <Projetos />





      </section>


      {/* Seção "Serviços" */}
      <section id="services" className="services-section">


      


      </section>














      {/* Seção "Contato" */}
      <section id="contact" className="contact-section">
        {/* Conteúdo de contato */}
        <h2>Contatos</h2>





      </section>
    </div>
  );
}

export default App;
