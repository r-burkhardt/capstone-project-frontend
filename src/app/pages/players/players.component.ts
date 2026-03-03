import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Player, PlayerService } from '../../core/services/player.service';
import { Subject } from 'rxjs';
import { ZipcodeService } from '../../core/services/zipcode.service';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  unsubscribe: Subject<void> = new Subject<void>();

  allPlayers: Player[];
  onePlayer: Player;

  constructor(
    private playerService: PlayerService,
    private zipcodeService: ZipcodeService
  ) { }

  ngOnInit() {

    const playerParameters = {};
    this.playerService.getAllPlayers(playerParameters)
      .subscribe(players => {
        this.allPlayers = players;
        this.allPlayers.forEach( player => {
          this.zipcodeService.getZipcode(player.zipcode)
            .subscribe(zip => {
              player.zipcodeObj = zip;
            });
        });
      });

  }

}
