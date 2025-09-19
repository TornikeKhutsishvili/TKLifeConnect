import {
  Component,
  inject,
  OnInit
} from '@angular/core';

import {
  RouterModule,
  RouterOutlet
} from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FirebaseService } from './core/services/firebase-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    RouterModule,
    // FirestoreModule,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements OnInit {
  protected title = 'TKLifeConnect';

  private firebaseService = inject(FirebaseService);

  ngOnInit() {
    // console.log(this.firebaseService.auth);
    // console.log(this.firebaseService.db);
  }

}
