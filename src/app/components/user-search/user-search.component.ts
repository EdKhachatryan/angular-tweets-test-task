import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {DataModel} from '../../models/data.model';
import {FormControl} from '@angular/forms';
import {DataWrapperService} from '../../services/data-wrapper.service';
import {SearchService} from '../../services/search.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {



  public users$: Observable<DataModel[]>;
  public datacource$: Observable<DataModel[]>;
  public filter: FormControl;


  constructor(private wrapperService: DataWrapperService,
              private searchService: SearchService) {

    this.users$ = this.wrapperService.getData(environment.api.users).map(res => res.results);
    this.filter = new FormControl('');
    this.datacource$ = this.searchService.filtertable(this.users$, this.filter);

  }

  ngOnInit() {
  }

}
