import React, { Component } from "react";
import { Button, Modal } from "react-materialize";
import { connect } from "react-redux";
import * as actionCreators from "../../actions/user-actions";
import AuthService from "../../services/AuthService";

class DeleteAccountBtn extends Component {
  constructor(props) {
    super(props);
    this.Auth = new AuthService();
    this.state = {
      userToken: this.Auth.getToken()
    };
  }

  deleteUser = async () => {
    await this.props.deleteUserData(this.props.userConnectedData.id, {
      authorization: `Bearer ${this.state.userToken}`
    });
    await this.Auth.logout();
    await window.location.replace("/users/login");
  };

  render() {
    return (
      <div className="delete-account-div">
        <Modal
          header="Delete account"
          fixedFooter
          trigger={
            <Button waves="light" className="delete-account-btn">
              Eliminar cuenta
            </Button>
          }
          className="action-modal"
          actions={[
            <Button waves="green" modal="close" flat>
              Cancela
            </Button>,
            <Button
              waves="green"
              modal="confirm"
              className="confirm-btn"
              onClick={this.deleteUser}
              flat
            >
              Confirmar
            </Button>
          ]}
        >
          Está seguro que desea eliminar su cuenta? (todos sus datos serán eliminados)
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userConnectedData: state.user.data,
    userConnectedStatus: state.user.status
  };
};

export default connect(
  mapStateToProps,
  actionCreators
)(DeleteAccountBtn);
