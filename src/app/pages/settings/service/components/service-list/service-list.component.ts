import {
  ChangeDetectionStrategy,
  Component,
  inject, OnInit,
  signal,
  ViewEncapsulation,
  WritableSignal
} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {Observable, of} from 'rxjs';
import {MatPrefix} from '@angular/material/form-field';
import {FormBuilder, FormGroup, ReactiveFormsModule, UntypedFormControl} from '@angular/forms';
import {PipButtonComponent} from '@ui/atoms/pip-button/pip-button.component';
import {TitlePageComponent} from '@ui/molecules/title-page/title-page.component';
import {PipSearchInputComponent} from '@ui/atoms/pip-search-input/pip-search-input.component';
import {PipPaginatorComponent} from '@ui/atoms/pip-paginator/pip-paginator.component';
import {PipListComponent} from '@ui/atoms/pip-table/pip-list.component';
import {PipListHeader} from '@ui/atoms/pip-table/components/pip-list-header/pip-list-header.component';
import {ServiceDetailComponent} from '@pages/settings/service/components/service-detail/service-detail.component';
import {PipAlertService} from '@ui/atoms/pip-alert/core/services/pip-alert.service';

@Component({
  selector: 'service-list',
  imports: [
    TitlePageComponent,
    PipButtonComponent,
    AsyncPipe,
    ReactiveFormsModule,
    MatPrefix,
    PipSearchInputComponent,
    PipPaginatorComponent,
    PipListComponent,
    ServiceDetailComponent
  ],
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceListComponent implements OnInit {
  private readonly _formBuilder: FormBuilder = inject(FormBuilder);
  private readonly _alert: PipAlertService = inject(PipAlertService);
  protected readonly searchForm: FormGroup;
  searchInputControl: UntypedFormControl = new UntypedFormControl();
  headers: WritableSignal<PipListHeader[]> = signal([
    {
      id: 1,
      type: 'text',
      class: '',
      title: '',
      name: ''
    },
    {
      id: 2,
      type: 'text',
      class: 'hidden md:block',
      title: 'Code',
      name: 'code'
    },
    {
      id: 3,
      type: 'text',
      class: '',
      title: 'Name',
      name: 'name'
    },
    {
      id: 4,
      type: 'text',
      class: 'hidden md:block',
      title: 'Price',
      name: 'price'
    },
    {
      id: 5,
      type: 'text',
      class: 'hidden lg:block',
      title: 'Duration',
      name: 'duration'
    },
    {
      id: 6,
      type: 'text',
      class: 'hidden lg:block',
      title: 'Active',
      name: 'active'
    },
    {
      id: 7,
      type: 'text',
      class: 'hidden sm:block',
      title: 'Details',
      name: 'details'
    }
  ]);
  rows = signal([
    {
      type: 'text',
      class: 'flex items-center',
      column: 'id'
    },
    {
      type: 'text',
      class: 'hidden md:block truncate',
      column: 'code'
    },
    {
      type: 'text',
      class: 'truncate',
      column: 'name'
    },
    {
      type: 'text',
      class: 'hidden md:block',
      column: 'price'
    },
    {
      type: 'text',
      class: 'hidden lg:block',
      column: 'duration'
    },
    {
      type: 'status',
      class: 'hidden lg:block',
      column: 'active'
    },
    {
      type: 'details',
      class: '',
      column: 'details'
    },
  ]);

  services$: Observable<any[]> = of([
    {
      id: 1,
      code: '0913213',
      name: 'Nutrition Service',
      price: '$100.00',
      duration: '1h',
      active: true,
      details: '<'
    },
    {
      id: 2,
      code: '0913213',
      name: 'Nutrition Service',
      price: '$100.00',
      duration: '1h',
      active: false,
      details: '<'
    },
  ]);

  constructor() {
    this.searchForm = this._formBuilder.group({searchControl: ''});
  }

  ngOnInit(): void {
    this._alert.showInfo({message: 'Loading services...'});
  }
}
