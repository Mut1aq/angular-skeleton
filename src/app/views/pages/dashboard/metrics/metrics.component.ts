import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminCard } from '../interfaces/admin-card.interface';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss'],
})
export class MetricsComponent implements OnDestroy {
  constructor() {}

  subscriptions: Subscription[] = [];
  @Input() set inputAdminCard(adminCard: AdminCard) {
    if (!adminCard) return;
    this.adminCard = adminCard;
  }
  adminCard?: AdminCard;
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    this.subscriptions.splice(0);
  }
}
