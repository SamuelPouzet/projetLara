import {Component, OnInit} from '@angular/core';
import {StorageService} from "../../auth/service/storage.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  selectedTab = 1;
  user= this.storageService.getSavedUser();

  constructor(
    protected storageService: StorageService
  ) {
  }

  ngOnInit() {

  }
}
