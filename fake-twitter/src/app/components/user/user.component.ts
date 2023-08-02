import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersResModel, UsersUserResModel } from 'src/app/models/users.model';
import { UserService } from 'src/app/services/user.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  private subs = new SubSink();
  rows: any;
  columns: any;

  constructor(
    private router: Router,
    private service: UserService) { }

  ngOnInit() {

    this.subs.sink = this.service.getAll().subscribe(results => this.onLoadDataSuccessful(results), error => this.onLoadDataFailed(error));

  }

  onLoadDataSuccessful(results: UsersResModel): void {
    this.rows = results.users;
  }

  onLoadDataFailed(error: any) {
  }

  ngOnDestroy() {

    this.subs.unsubscribe();

  }


}
