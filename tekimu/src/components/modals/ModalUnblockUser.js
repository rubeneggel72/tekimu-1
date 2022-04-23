import { Modal, Button } from "react-materialize";
import React, { Component } from "react";
import axios from "axios";
import InfoToastService from "../../services/InfoToastService";

class ModalUnblockUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBlocked: true
    };
  }

  handleUnblock = () => {
    axios
      .get("/users/unblock/" + this.props.user_id + "/" + this.props.target_id)
      .then(res => {
        InfoToastService.custom.info(res.data.message, 5000);
        this.setState({ isBlocked: false });
        this.props.isBlocked();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Modal
          id="unblock-user-modal"
          className="modals"
          header="Unblock user"
          trigger={false}
          actions={[
            <Button modal="close" flat>
              Cancelar
            </Button>,
            <Button onClick={this.handleUnblock} modal="close" flat>
              Confirmar
            </Button>
          ]}
        >
          <p>Estás seguro de desbloquear a este usuario?</p>
          <p className="modal-sub-text">
            (Al desbloquearlo, el podrá enviarte mensajes y notificaciones. También aparecerá en las sugerencias y búsqueda.)
          </p>
        </Modal>
      </div>
    );
  }
}

export default ModalUnblockUser;
