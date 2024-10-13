import React from 'react';
import './Style.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <h2>Portfólio</h2>
      </div>
      <nav>
        <ul>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#tecnologies">Tecnologias</a></li>
          <li><a href="#contact">Contatos</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
