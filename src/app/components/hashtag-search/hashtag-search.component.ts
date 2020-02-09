import { Component, OnInit } from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {DataWrapperService} from '../../services/data-wrapper.service';
import 'rxjs-compat/add/operator/map';
import {DataModel} from '../../models/data.model';
import {filter} from 'rxjs/internal/operators/filter';
import 'rxjs-compat/add/operator/filter';
import {FormControl} from '@angular/forms';


import {map, startWith} from 'rxjs/operators';




@Component({
  selector: 'app-hashtag-search',
  templateUrl: './hashtag-search.component.html',
  styleUrls: ['./hashtag-search.component.scss']
})
export class HashtagSearchComponent implements OnInit {

  public tweets$: Observable<DataModel[]>;
  // filteredTweets$: Observable<DataModel[]>;
  filter: FormControl;
  // filter$: Observable<string>;
  datacource: Observable<DataModel[]>;


  constructor(private wrapperService: DataWrapperService) {
    this.tweets$ = this.wrapperService.getByHashtag().map(res => res.results);


    this.filter = new FormControl('');
   /* this.filter$ = this.filter.valueChanges.pipe(startWith(''));
    this.filteredTweets$ = combineLatest(this.tweets$, this.filter$).pipe(
      map(([tweets, filterString]) => tweets.filter(tweet => tweet.hashtags.toString().indexOf(filterString) !== -1))
    );*/
    this.datacource = this.filtertable(this.tweets$, this.filter);
  }

  ngOnInit() {


  }

  filtertable(array$: Observable<DataModel[]>, filter1: FormControl): Observable<DataModel[]> {
    let filteredTweets$: Observable<DataModel[]>;
     // filter$: Observable<string>,
    const filter$ = filter1.valueChanges.pipe(startWith(''));
    filteredTweets$ = combineLatest(array$, filter$).pipe(
      map(([tweets, filterString]) => tweets.filter(
        tweet => tweet.text.toString().indexOf(filterString) !== -1 ||
                          tweet.likes.toString().indexOf(filterString) !== -1  ||
                          tweet.replies.toString().indexOf(filterString) !== -1  ||
                          tweet.retweets.toString().indexOf(filterString) !== -1  ||
                          tweet.hashtags.toString().indexOf(filterString) !== -1  ||
                          tweet.date.toString().indexOf(filterString) !== -1 ))
    );
    return filteredTweets$;
  }


}

