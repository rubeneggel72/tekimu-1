import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Col, Card } from "react-materialize";

class SuggestionsHeader extends Component {
  render() {
    return (
      <Col s={12}>
        <Card
          className="suggestions-header"
          textClassName="white-text"
          title="Sugerencias para tu perfil"
          actions={[
            <NavLink
              key={1}
              className="suggestions-header-links"
              to={"/users/profile/" + this.props.username}
            >
              Revisar mi perfil
              <i className="material-icons link-icon">person</i>
            </NavLink>
          ]}
        >
          Encontramos personas que te pueden interesar !
          <p className="modal-sub-text white-text">
            (Asegurate tener personalizado tu perfil para que te conozcan!)
          </p>
        </Card>
      </Col>
    );
  }
}

export default SuggestionsHeader;
