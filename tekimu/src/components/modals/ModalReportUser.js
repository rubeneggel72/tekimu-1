import { Modal, Button } from "react-materialize";
import React, { Component } from "react";
import axios from "axios";
import InfoToastService from "../../services/InfoToastService";

class ModalReportUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReported: false,
      isBlocked: false
    };
  }

  handleReport = () => {
    axios
      .get("/users/report/" + this.props.user_id + "/" + this.props.target_id)
      .then(res => {
        InfoToastService.custom.info(res.data.message, 3000);
        this.setState({ isReported: true });
        this.props.isReported();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        {!this.state.isReported ? (
          <Modal
            id="report-user-modal"
            className="modals"
            header="Report this user"
            trigger={false}
            actions={[
              <Button modal="close" flat>
                Cancelar
              </Button>,
              <Button onClick={this.handleReport} modal="close" flat>
                Confirmar
              </Button>
            ]}
          >
            <p>Estás seguro de reportar a este usuario?</p>
            <p className="modal-sub-text">
              (El usuario será agregado a la lista de perfiles falsos)
            </p>
          </Modal>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default ModalReportUser;
