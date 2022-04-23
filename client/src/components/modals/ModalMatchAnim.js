import React, { Component } from "react";
import { Modal } from "react-materialize";
import { NavLink } from "react-router-dom";
import MatchAnim from "../../assets/match-love-anim.webp";

class ModalMatchAnim extends Component {
  render() {
    return (
      <div>
        <Modal
          header="Esto es match!"
          trigger={false}
          id="match-anim-modal"
          className="modals modal-match-anim"
        >
          <p>Es hora de conocerse !!!</p>
          <img
            className="img-match-anim"
            src={MatchAnim}
            alt="Match animation"
          />
          <p>
            Ve a mensajes para comunicarte con tus coincidencias
            <NavLink to={"/chat/messages"}>
              {" "}
              <i className="material-icons prefix pink-icon icon-vert-align">
                mail
              </i>
            </NavLink>
          </p>
        </Modal>
      </div>
    );
  }
}

export default ModalMatchAnim;
