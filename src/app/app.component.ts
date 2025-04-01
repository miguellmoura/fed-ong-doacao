import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StoriesComponent } from './stories/stories.component';
import { ActionsComponent } from './actions/actions.component';
import { ParticipateComponent } from './participate/participate.component';
import { DonateComponent } from './donate/donate.component';
import { MissionComponent } from './mission/mission.component';
import { FooterComponent } from './footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, StoriesComponent, ActionsComponent, ParticipateComponent, DonateComponent, MissionComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-ong-doacao';
}
