import { ADD_CARTE, ADD_CENTRE, ERROR_LOGIN, ERROR_SYSTEM, MAIL_SEND, UPDATE_CENTRE, UPDATE_PASSWORD,  UPDATE_USER, } from "./constants";

export const messages = new Map([
    [ADD_CENTRE, "Le centre a été créé avec succès"],
    [UPDATE_CENTRE, "Le centre a été modifié avec succès"],
    [UPDATE_USER, "L'utilisateur a été modifié avec succès"],
    [UPDATE_PASSWORD, "Votre mot de passe a été modifié avec succès"],
    [ADD_CARTE, "La carte a été créée avec succès"],
    [MAIL_SEND, "Le mail a été envoyé avec succès.\nVeuillez suivre les instructions."],
    [ERROR_SYSTEM, "Une erreur s'est produite lors de votre opération. Merci de rééssayer plus tard!"],
    [ERROR_LOGIN, "votre username ou mot de passe est incorrect"],
   
]);
