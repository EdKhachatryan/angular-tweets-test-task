import {Component, OnInit} from '@angular/core';
import { Observable} from 'rxjs';
import {DataWrapperService} from '../../services/data-wrapper.service';
import 'rxjs-compat/add/operator/map';
import {DataModel} from '../../models/data.model';
import 'rxjs-compat/add/operator/filter';
import {FormControl} from '@angular/forms';
import {map} from 'rxjs/operators';
import {SearchService} from '../../services/search.service';


@Component({
  selector: 'app-hashtag-search',
  templateUrl: './hashtag-search.component.html',
  styleUrls: ['./hashtag-search.component.scss']
})
export class HashtagSearchComponent implements OnInit {


  public tweets$: Observable<DataModel[]>;
  public datacource$: Observable<DataModel[]>;
  public filter: FormControl;


  page = 1;
  pageSize = 4;

  loading = false;


  constructor(private wrapperService: DataWrapperService,
              private searchService: SearchService) {
    this.tweets$ = this.wrapperService.getByHashtag().map(res => res.results);

    this.filter = new FormControl('');


    this.datacource$ = this.searchService.filtertable(this.tweets$, this.filter);


  }

  ngOnInit() {
// this.pagination(this.tweets$);

  }



  pagination(pagingArray: Observable<DataModel[]>) {
    pagingArray.subscribe(res => {
      const rr = res.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
      console.log(rr);
    });
  }




}

