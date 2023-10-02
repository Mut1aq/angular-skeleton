import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MetricsComponent } from './metrics/metrics.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { RouterModule } from '@angular/router';
import { TranslationModule } from '../../shared/modules/translation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { PipesModule } from '../../shared/pipes/pipes.module';

@NgModule({
  declarations: [DashboardComponent, MetricsComponent, UsersTableComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '**',
        component: DashboardComponent,
      },
    ]),
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatPaginatorModule,
    TranslationModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    PipesModule,
  ],
})
export class DashboardModule {}
