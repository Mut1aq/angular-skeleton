import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/config/constants';
import { APIService } from 'src/app/core/services/api.service';
import { User } from 'src/app/core/shared/interfaces/entities/user.interface';
import { AdminCard } from './interfaces/admin-card.interface';
import { FilterUsersQuery } from './interfaces/filter-users-query.interface';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private readonly api: APIService) {}

  fetchAdminCards(): Observable<AdminCard> {
    return this.api.get<AdminCard>(Constants.ADMINS_PATH + 'dashboard-cards');
  }

  fetchUsers(filterUsersQuery: FilterUsersQuery) {
    return this.api.get<User[]>(
      Constants.ADMINS_PATH + 'users',
      filterUsersQuery
    );
  }

  countUsers() {
    return this.api.get<number>(Constants.USERS_PATH + 'count');
  }
}
