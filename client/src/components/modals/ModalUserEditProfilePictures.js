import React, { Component } from "react";
import EditProfilePictures from "../profileEdit/EditProfilePictures";
import { Modal } from "react-materialize";

class ModalUserEditProfilePictures extends Component {
  render() {
    return (
      <div>
        <Modal
          id="edit-pictures-modal"
          className="modals"
          header="Edit your profile pictures"
          fixedFooter
          trigger={false}
        >
          <p className="modal-intro">
            Agrega hasta 5 fotos (Agregando fotografias aumentará tu popularidad)
          </p>
          <EditProfilePictures />
        </Modal>
      </div>
    );
  }
}

export default ModalUserEditProfilePictures;
