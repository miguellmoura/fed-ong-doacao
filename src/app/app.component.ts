import { RouterModule, RouterOutlet } from '@angular/router'; 
import { HomeComponent } from './home/home.component';
import { StoriesComponent } from './stories/stories.component';
import { ActionsComponent } from './actions/actions.component';
import { ParticipateComponent } from './participate/participate.component';
import { Component } from '@angular/core';
import { DonateComponent } from './donate/donate.component';
import { FooterComponent } from './footer/footer.component';
import { MissionComponent } from './mission/mission.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule, 
    RouterOutlet,
    HomeComponent,
    StoriesComponent,
    ActionsComponent,
    ParticipateComponent,
    DonateComponent,
    MissionComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-ong-doacao';
}
