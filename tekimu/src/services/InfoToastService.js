import Materialize from "materialize-css";

export default {
  custom: {
    info: (message, length) => {
      Materialize.toast({
        html: message,
        displayLength: length,
        classes: "rounded info-toast"
      });
    }
  },
  mail: {
    resetPassword: () => {
      Materialize.toast({
        html: "Te enviamos un Email para que puedas generar una nueva contraseña",
        displayLength: 3000,
        classes: "rounded info-toast"
      });
    }
  },
  auth: {
    changedPassword: () => {
      Materialize.toast({
        html: "Tu contraseña ha cambiado",
        displayLength: 3000,
        classes: "rounded info-toast"
      });
    }
  }
};
