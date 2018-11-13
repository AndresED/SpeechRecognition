import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
interface IWindows extends Window {
  webkitSpeechRecognition: any;
}
@Injectable({
  providedIn: 'root'
})
export class SpeechrecognitionService {

  constructor(private zone: NgZone) { }
  public record(language: string): Observable <string> {
    console.log('Hola packpu');
    return Observable.create(observer => {
      const  {webkitSpeechRecognition}: IWindows = <IWindows> window;
      const recognition = new webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.continuous = true;
      recognition.onresult = e => this.zone.run( () => observer.next(e.results.item(e.results.length -1).item(0).transcript));
      recognition.onerror = e => observer.error(e);
      recognition.onend = () => observer.complete();
      recognition.lang = language;
      recognition.start();

    });
  }
}
