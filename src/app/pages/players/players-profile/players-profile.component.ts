import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player, PlayerService } from '../../../core/services/player.service';
import { Zipcode, ZipcodeService } from '../../../core/services/zipcode.service';

import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-players-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './players-profile.component.html',
  styleUrls: ['./players-profile.component.css']
})
export class PlayersProfileComponent implements OnInit, OnDestroy {
  unsubscribe: Subject<void> = new Subject<void>();

  player: Player;
  profilePic;
  zipcode: Zipcode;

  constructor(
    private playerService: PlayerService,
    private zipcodeService: ZipcodeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getPlayer(params['id']);
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getPlayer(id: string) {
    this.playerService.getPlayer(id)
      .subscribe(player => {
        this.player = player;
        this.player.calculateRank();
        this.profilePic = player.profilePic;
        this.zipcodeService.getZipcode(this.player.zipcode)
          .subscribe(zipcode => {
            this.player.zipcodeObj = zipcode;
          });
      });
  }

}
