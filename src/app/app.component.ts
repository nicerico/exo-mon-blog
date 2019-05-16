import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    {
      title: 'Mon premier post',
      content: 'Alii nullo quaerente vultus severitate adsimulata patrimonia sua in inmensum extollunt',
      loveIt: 1,
      created_at: '15/05/2019, 11:00 AM'
    },
    {
      title: 'Mon deuxieme post',
      content: 'Alii nullo quaerente vultus severitate adsimulata patrimonia sua in inmensum extollunt',
      loveIt: -1,
      created_at: '15/05/2019, 12:00 AM'
    },
    {
      title: 'Nouveau post',
      content: 'Alii nullo quaerente vultus severitate adsimulata patrimonia sua in inmensum extollunt',
      loveIt: 0,
      created_at: '15/05/2019, 13:00 AM'
    }
  ];
}
