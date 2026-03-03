import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Organization } from '../../core/services/organization.service';
import { OrgSearchComponent } from './org-search/org-search.component';
import { OrgMiniDetailComponent } from './org-mini-detail/org-mini-detail.component';

@Component({
  selector: 'app-organizations',
  standalone: true,
  imports: [CommonModule, OrgSearchComponent, OrgMiniDetailComponent],
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent implements OnInit {

  selectedOrg: Organization;
  @Output() passOrg = new EventEmitter<Organization>();

  constructor() { }

  ngOnInit() {
  }

  selectedOrgUpdate(organization: Organization) {
    this.selectedOrg = organization;
  }

  passOnOrg() {
    this.passOrg.emit(this.selectedOrg);
  }

}
