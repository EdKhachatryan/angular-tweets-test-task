import {Component, OnInit} from '@angular/core';
import { Observable} from 'rxjs';
import {DataWrapperService} from '../../services/data-wrapper.service';

import {DataModel} from '../../models/data.model';

import {FormControl} from '@angular/forms';
import {SearchService} from '../../services/search.service';
import {environment} from '../../../environments/environment';


@Component({
  selector: 'app-hashtag-search',
  templateUrl: './hashtag-search.component.html',
  styleUrls: ['./hashtag-search.component.scss']
})
export class HashtagSearchComponent implements OnInit {


  public tweets$: Observable<DataModel[]>;
  public datacource$: Observable<DataModel[]>;
  public filter: FormControl;


  constructor(private wrapperService: DataWrapperService,
              private searchService: SearchService) {

    this.tweets$ = this.wrapperService.getData(environment.api.hashtags).map(res => res.results);
    this.filter = new FormControl('');
    this.datacource$ = this.searchService.filtertable(this.tweets$, this.filter);

  }

  ngOnInit() {

  }

}

