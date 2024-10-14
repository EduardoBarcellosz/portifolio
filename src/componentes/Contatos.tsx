import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Style.css';

const Contatos: React.FC = () => {
    return (
        <section id="contact" className="contacts">
            <h2>Contatos</h2>
            <div className="contact-section">
                <a href="https://wa.me/5551997709939" target="_blank" rel="noopener noreferrer">
                    <button className='social-button whatsapp'>
                        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                    </button>
                </a>
                <a href="https://github.com/EduardoBarcellosz" target="_blank" rel="noopener noreferrer">
                    <button className='social-button github'>
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </button>
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <button className='social-button linkedin'>
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </button>
                </a>
                <a href="https://www.instagram.com/o_barcellos/" target="_blank" rel="noopener noreferrer">
                    <button className='social-button instagram'>
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </button>
                </a>
            </div>
        </section>
    );
}

export default Contatos;