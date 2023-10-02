import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastService } from 'src/app/core/services/toast.service';
import { HttpError } from 'src/app/core/shared/interfaces/http-response/http-error.interface';
import { DashboardService } from './dashboard.service';
import { AdminCard } from './interfaces/admin-card.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  constructor(
    private readonly dashboardService: DashboardService,
    private readonly toast: ToastService
  ) {}
  subscriptions: Subscription[] = [];
  adminCard?: AdminCard;

  ngOnInit(): void {
    this.fetchAdminCard();
  }

  fetchAdminCard() {
    let adminCardSubscriber$ = this.dashboardService
      .fetchAdminCards()
      .subscribe({
        next: (adminCard: AdminCard) => {
          this.adminCard = adminCard;
        },
        error: (err: HttpError) => {
          this.toast._onApiError(err);
        },
      });
    this.subscriptions.push(adminCardSubscriber$);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    this.subscriptions.splice(0);
    this.adminCard = undefined;
  }
}
