import React from 'react';
import './Style.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Portfólio</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#tecnologias">Tecnologias</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contact">Contatos</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
