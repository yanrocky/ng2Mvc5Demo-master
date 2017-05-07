import { Component, Input } from '@angular/core';

import { Article, ArticleListConfig } from '../models/index';
import { ArticlesService } from '../services/index';

@Component({
    moduleId: module.id,
    selector: 'article-list',
    //templateUrl: './tsScripts/shared/article-helpers/article-list.component.html',
    template: `
<article-preview
  *ngFor="let article of results"
  [article]="article">
</article-preview>

<div class="article-preview"
  [hidden]="!loading">
  Loading articles...
</div>

<div class="article-preview"
  [hidden]="loading || results.length">
  No articles are here... yet.
</div>

<nav [hidden]="loading || totalPages <= 1">
  <ul class="pagination">

    <li class="page-item"
      [ngClass]="{'active': pageNumber === currentPage}"
      *ngFor="let pageNumber of totalPages"
      (click)="setPageTo(pageNumber)">

      <a class="page-link" href="#">{{ pageNumber }}</a>

    </li>

  </ul>
</nav>

`
})
export class ArticleListComponent {
  constructor (
    private articlesService: ArticlesService
  ) {}

  class = 'relative';
  type = 'Component-relative template & style URLs';
  path = 'article-list.component.html';

  @Input() limit: number;
  @Input()
  set config(config: ArticleListConfig) {
    if (config) {
      this.query = config;
      this.currentPage = 1;
      this.runQuery();
    }
  }

  query: ArticleListConfig;
  results: Article[];
  loading: boolean = false;
  currentPage: number = 1;
  totalPages: Array<number> = [1];

  setPageTo(pageNumber) {
    this.currentPage = pageNumber;
    this.runQuery();
  }

  runQuery() {
    this.loading = true;
    this.results = [];

    // Create limit and offset filter (if necessary)
    if (this.limit) {
      this.query.filters.limit = this.limit;
      this.query.filters.offset =  (this.limit * (this.currentPage - 1))
    }

    this.articlesService.query(this.query)
    .subscribe(data => {
      this.loading = false;
      this.results = data.articles;

      // Used from http://www.jstips.co/en/create-range-0...n-easily-using-one-line/
      this.totalPages = Array.from(new Array(Math.ceil(data.articlesCount / this.limit)),(val,index)=>index+1);
    });
  }
}
