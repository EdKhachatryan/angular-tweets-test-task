export  interface DataModel {
  'account': {
    'fullname': string;
    'href': string;
    'id': number;
  };
  'date': string;  // check, it may be Date()
  'hashtags': Array<string>;
  'likes': number;
  'replies': number;
  'retweets': number;
  'text': string;
}
