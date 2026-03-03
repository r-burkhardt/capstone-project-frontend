import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Organization, OrganizationService } from '../../../core/services/organization.service';
import { ZipcodeService } from '../../../core/services/zipcode.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-org-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './org-search.component.html',
  styleUrls: ['./org-search.component.css']
})
export class OrgSearchComponent implements OnInit {
  unsubscribe: Subject<void> = new Subject<void>();

  searchResults: Organization[];
  @Output() selectedOrg = new EventEmitter<Organization>();
  @Output() selected = new EventEmitter();

  constructor(
    private organizationService: OrganizationService,
    private zipcodeService: ZipcodeService
  ) {
  }

  ngOnInit() {
  }

  createSearchResults() {
    const orgParameters = {};
    this.organizationService.getAllOrganizations(orgParameters)
      .subscribe(organizations => {
        this.searchResults = organizations;
        this.searchResults.forEach( org => {
          this.zipcodeService.getZipcode(org.zipcode)
            .subscribe(zip => {
              org.zipcodeObj = zip;
            });
        });
      });
  }

  onSelect(organization: Organization) {
    this.selectedOrg.emit(organization);
    this.selected.emit();
  }

}
