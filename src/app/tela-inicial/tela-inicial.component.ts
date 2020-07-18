import { Jogo } from './../model/jogo';
import { StatsService } from './../service/stats.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.scss']
})
export class TelaInicialComponent implements OnInit {

  jogo: Jogo[] = [];
  nomeColunas = ['jogador1', 'gols1', 'jogador2', 'gols2'];

  constructor(statsService: StatsService) {
    statsService.getJogos().subscribe((resp: Jogo[]) => {
      this.jogo = resp;
      console.log(this.jogo[0]);
    });
  }

  ngOnInit() {
    console.log('tela inicial');
  }

}
