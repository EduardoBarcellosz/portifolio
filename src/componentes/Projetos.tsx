import React from 'react';
import './Style.css';

import { motion} from "framer-motion"


// import required modules

const Projetos: React.FC = () => {
  return (
    <section id="projects">
      <motion.div
        initial={{ opacity: 0, x: -250 }}
        whileInView={{ opacity: 1, x: 0}}
        exit={{ opacity: 0, x: 250 }} 
        transition={{ duration: 1 }} // Adiciona a duração da transição
        viewport={{
          margin: '-100px 0px -400px 0px', // Adiciona margem para o viewport (top, right, bottom, left)
        }}
      >
        <div className="projects-section">
          <h3 style={{color: '#9669FF'}}>Projetos</h3>
        </div>
      </motion.div>
    </section>
  );
};

export default Projetos;