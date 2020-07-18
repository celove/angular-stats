import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  private REST_API_SERVER = 'https://stats-fifa-tracker.herokuapp.com/';

  constructor(private httpClient: HttpClient) {

  }

  public getJogos() {
    const stream = new Subject();
    this.httpClient.get(this.REST_API_SERVER + 'get').subscribe((resp) => {
      stream.next(resp);
    });
    return stream;
  }
}
