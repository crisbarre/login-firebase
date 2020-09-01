import { Component } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.css'],
})
export class NabvarComponent {
  public user$: Observable<any> = this.authServ.afAuth.user;
  constructor(private authServ: AuthService, private router: Router) {}

  async onLogout() {
    try {
      await this.authServ.logout();
      this.router.navigate(['/login']);
    } catch (error) {
      console.log(error);
    }
  }
}
