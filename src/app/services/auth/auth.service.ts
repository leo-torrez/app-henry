import { ModelUsuario } from '../../model/usuario.model';
import * as firebase from 'firebase';

export class AuthService{
  public autenticar(email: string, senha: string): void{
    console.log("email ", email, "senha ", senha)
    firebase.auth().signInWithEmailAndPassword(email, senha)
    .then((response: any) =>{
      console.log(response)
    })
    .catch((error) => {
      console.log(error);
    })
  }
}
