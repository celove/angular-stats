import { Jogo } from './../model/jogo';
import { StatsService } from './../service/stats.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.scss']
})
export class TelaInicialComponent implements OnInit {

  jogo: Jogo[] = [];
  nomeColunas = ['jogador1', 'time1', 'gols1', 'jogador2', 'time2', 'gols2'];
  jogadores = ['Labo', 'Bolo'];
  jogador1;
  jogador2;
  times = ['time1', 'time2'];
  time1;
  time2;
  filtroForm: FormGroup;

  constructor(private statsService: StatsService) {
    statsService.getJogos().subscribe((resp: Jogo[]) => {
      this.jogo = resp;
      console.log(resp);
    });
  }

  ngOnInit() {
    this.filtroForm = new FormGroup({
      jogador1: new FormControl(),
      time1: new FormControl()
    });
  }

  onFilter() {
    console.log('passou');
    this.statsService.getJogosFiltrado(this.filtroForm).subscribe((resp: Jogo[]) => {
      this.jogo = resp;
    });
  }

}
