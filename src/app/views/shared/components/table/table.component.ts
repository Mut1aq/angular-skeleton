import { Component, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { FilterForm } from './interfaces/filter-form.interface';
import { TableData } from './interfaces/table-data.interface';
import { MatTableDataSource } from '@angular/material/table';
import { tableData } from './mocks/table-data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  constructor(private readonly fb: NonNullableFormBuilder) {}

  filterForm!: FormGroup<FilterForm>;
  dataSource = new MatTableDataSource<TableData>(tableData);
  displayedColumns: string[] = ['col1', 'col2', 'col3', 'date'];

  ngOnInit(): void {
    this.initTableFilterForm();
  }

  public get startDate() {
    return this.filterForm.get('startDate');
  }

  public get endDate() {
    return this.filterForm.get('endDate');
  }

  initTableFilterForm() {
    this.filterForm = this.fb.group({
      startDate: '',
      endDate: '',
    });
  }
}
