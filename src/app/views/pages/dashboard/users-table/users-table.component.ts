import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ToastService } from 'src/app/core/services/toast.service';
import { User } from 'src/app/core/shared/interfaces/entities/user.interface';
import { HttpError } from 'src/app/core/shared/interfaces/http-response/http-error.interface';
import { DashboardService } from '../dashboard.service';
import { FilterUsersQuery } from '../interfaces/filter-users-query.interface';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements OnInit, OnDestroy {
  constructor(
    private readonly dashboardService: DashboardService,
    private readonly toast: ToastService,
    private readonly fb: NonNullableFormBuilder,
    private readonly router: Router
  ) {}

  @Input() totalUsers: number = 0;

  subscriptions: Subscription[] = [];

  dataSource = new MatTableDataSource<User>();
  displayedColumns: string[] = [
    'fullName',
    'phoneNumber',
    'email',
    'createdAt',
  ];
  pageSize = 15;
  pageIndex = 0;
  pageSizeOptions = [15, 25, 50];

  filterForm = this.fb.group({
    startDate: [''],
    endDate: [''],
  });

  fetchUsers(filterUsersQuery: FilterUsersQuery) {
    let usersSubscriber$ = this.dashboardService
      .fetchUsers(filterUsersQuery)
      .subscribe({
        next: (users: User[]) => {
          this.dataSource = new MatTableDataSource<User>(users);
        },
        error: (err: HttpError) => {
          this.toast._onApiError(err);
        },
      });
    this.subscriptions.push(usersSubscriber$);
  }

  handlePageEvent(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.fetchUsers({ skip: this.pageIndex * this.pageSize, limit: 15 });
  }

  ngOnInit(): void {
    this.fetchUsers({ skip: 0, limit: 15 });
  }

  goToUserProfile(userID: string) {
    this.router.navigate(['users/' + userID]);
  }

  public get startDate() {
    return this.filterForm.get('startDate');
  }

  public get endDate() {
    return this.filterForm.get('endDate');
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    this.subscriptions.splice(0);
  }
}
