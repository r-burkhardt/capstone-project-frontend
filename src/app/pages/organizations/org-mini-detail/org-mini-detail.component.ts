import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Organization } from '../../../core/services/organization.service';

@Component({
  selector: 'app-org-mini-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './org-mini-detail.component.html',
  styleUrls: ['./org-mini-detail.component.css']
})
export class OrgMiniDetailComponent implements OnInit {

  @Input() selectedOrg: Organization;

  constructor() { }

  ngOnInit() {
  }

}
