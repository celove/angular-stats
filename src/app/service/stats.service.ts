import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  // private REST_API_SERVER = 'https://stats-fifa-tracker.herokuapp.com/';
  private REST_API_SERVER = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {

  }

  public getJogos() {
    const stream = new Subject();
    this.httpClient.get(this.REST_API_SERVER + 'get').subscribe((resp) => {
      stream.next(resp);
    });
    return stream;
  }

  public getJogosFiltrado(formGroup: FormGroup) {
    const jogador: string = formGroup.value.jogador1;
    const time: string = formGroup.value.time1;
    console.log(formGroup.value);
    const stream = new Subject();
    this.httpClient.get(this.REST_API_SERVER + 'getJogadorTime?' + 'jogador1=' + jogador + '&time1=' + time).subscribe((resp) => {
      console.log(resp);
      stream.next(resp);
    }, (err) => {
      console.log('erro: ' + err);
    });
    return stream;
  }

  public cadastroJogo(formGroup: FormGroup) {
    const stream = new Subject();
    this.httpClient.post(this.REST_API_SERVER + 'cadastroJogo', formGroup.value).subscribe((resp) => {
      console.log(resp);
      stream.next(resp);
    }, (err) => {
      console.log('erro: ' + err);
    }
    );
    return stream;
  }
}
