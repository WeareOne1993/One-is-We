import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Items {
  heading = 'Github Users';

  constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('http://localhost:8080/SpringMVCRestAPIDemo/');
    });

    this.http = http;
  }

  activate() {
    return this.http.fetch('figures')
      .then(response => response.json())
      .then(datas => this.datas = datas);
  }
}