import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from './services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { UserI } from './models/models.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor() {}
}