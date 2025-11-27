import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  private readonly _httpClient: HttpClient = inject(HttpClient);
  private readonly _router: Router = inject(Router);

  constructor() {
  }


  signIn(email: string, password: string) {
    if (email === 'andresospina9911@gmail.com' && password === "Serdna3112901252*") {
      this._router.navigateByUrl('/home');
    }
  }

}
