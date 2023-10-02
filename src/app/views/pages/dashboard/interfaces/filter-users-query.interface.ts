import { FilterQuery } from 'src/app/core/shared/interfaces/queries/filter-query.interface';

export interface FilterUsersQuery extends FilterQuery {
  phoneNumber?: string;
  fullName?: string;
  startDate?: string;
  endDate?: string;
}
