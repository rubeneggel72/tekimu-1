import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import "materialize-css";

class Footer extends Component {
    render() {
      return (
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">Puedes usar Filas y columnas para organizar el contenido del pie de pagina.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2022 Copyright Tekimu
            <a className="grey-text text-lighten-4 right" href="#!">Mas Links</a>
            </div>
          </div>
        </footer>
      )
    }
}

export default Footer;