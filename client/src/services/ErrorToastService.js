import Materialize from "materialize-css";

export default {
  custom: {
    error: (message, length) => {
      Materialize.toast({
        html: message,
        displayLength: length,
        classes: "rounded error-toast"
      });
    }
  },
  user: {
    userNotFound: () => {
      Materialize.toast({
        html: "No se puede encontrar este Usuario",
        displayLength: 1200,
        classes: "rounded error-toast"
      });
    }
  },
  auth: {
    pageRequiresLogin: () => {
      Materialize.toast({
        html: "Debes realizar LOG IN para acceder a esta pagina",
        displayLength: 1200,
        classes: "rounded error-toast"
      });
    },
    userAlreadyLogged: () => {
      Materialize.toast({
        html: "Aún estás Logueado",
        displayLength: 1000,
        classes: "rounded error-toast"
      });
    },
    invalidPwdResetKey: () => {
      Materialize.toast({
        html: "Esta llave para cambiar la contraseña es invalida",
        displayLength: 1000,
        classes: "rounded error-toast"
      });
    }
  }
};
