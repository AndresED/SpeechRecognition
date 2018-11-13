import { Component } from '@angular/core';
import {SpeechrecognitionService} from './speechrecognition.service';
@Component({
  selector: 'app-root',
  providers: [SpeechrecognitionService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SpeechRecognition';
  constructor(private speech: SpeechrecognitionService) {
    this.speech.record('es_ES').subscribe(e => {
      console.log(e);
    });
  }
}
