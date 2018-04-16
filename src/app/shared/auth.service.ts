import { Injectable } from "@angular/core";

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

    public isLogin: boolean = false;

    constructor(private afAuth: AngularFireAuth) {

        this.afAuth.authState
            .subscribe(user => {
                if (user) this.isLogin = true;
            });
    }


    public login(): Promise<any> {
        return this.afAuth
            .auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    public logout(): Promise<any>  {
        return this.afAuth.auth.signOut();
    }


}