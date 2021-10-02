import React from 'react';
import facebook from '../images/facebook.png';
import youtube from '../images/youtube.png';
import instagram from '../images/instagram.png';

function Footer(){
    return(
        <div className="container-fluid footer bg-dark ">
            <footer className="text-center text-lg-start text-muted">
  
              <section
                className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                >
                
                <div className="me-5 d-none d-lg-block mensajesocial">
                  <span>Conectate con nosotros en nuestras redes sociales:</span>
                </div>

                <div>
                  <a href="" className="me-2 text-reset">
                    <i className="fab fa-facebook-f"><img src={facebook} className="logo-social" /></i>
                  </a>
                  <a href="" className="me-2 text-reset">
                    <i className="fab fa-youtube"><img src={youtube} className="logo-social" /></i>
                  </a>
                  <a href="" className="me-2 text-reset">
                    <i className="fab fa-instagram"><img src={instagram} className="logo-social" /></i>
                  </a>
                
                </div>

              </section>
              <div className="text-center p-1" >
                © 2021 Copyright:
                <a className="text-reset fw-bold" href="#">Silvicultural.com</a>
              </div>
          
          </footer>
        </div>
    );
}

export default Footer;