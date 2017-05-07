"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var index_1 = require('../models/index');
var index_2 = require('../services/index');
var ArticleListComponent = (function () {
    function ArticleListComponent(articlesService) {
        this.articlesService = articlesService;
        this.class = 'relative';
        this.type = 'Component-relative template & style URLs';
        this.path = 'article-list.component.html';
        this.loading = false;
        this.currentPage = 1;
        this.totalPages = [1];
    }
    Object.defineProperty(ArticleListComponent.prototype, "config", {
        set: function (config) {
            if (config) {
                this.query = config;
                this.currentPage = 1;
                this.runQuery();
            }
        },
        enumerable: true,
        configurable: true
    });
    ArticleListComponent.prototype.setPageTo = function (pageNumber) {
        this.currentPage = pageNumber;
        this.runQuery();
    };
    ArticleListComponent.prototype.runQuery = function () {
        var _this = this;
        this.loading = true;
        this.results = [];
        // Create limit and offset filter (if necessary)
        if (this.limit) {
            this.query.filters.limit = this.limit;
            this.query.filters.offset = (this.limit * (this.currentPage - 1));
        }
        this.articlesService.query(this.query)
            .subscribe(function (data) {
            _this.loading = false;
            _this.results = data.articles;
            // Used from http://www.jstips.co/en/create-range-0...n-easily-using-one-line/
            _this.totalPages = Array.from(new Array(Math.ceil(data.articlesCount / _this.limit)), function (val, index) { return index + 1; });
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ArticleListComponent.prototype, "limit", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', index_1.ArticleListConfig), 
        __metadata('design:paramtypes', [index_1.ArticleListConfig])
    ], ArticleListComponent.prototype, "config", null);
    ArticleListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'article-list',
            //templateUrl: './tsScripts/shared/article-helpers/article-list.component.html',
            template: "\n<article-preview\n  *ngFor=\"let article of results\"\n  [article]=\"article\">\n</article-preview>\n\n<div class=\"article-preview\"\n  [hidden]=\"!loading\">\n  Loading articles...\n</div>\n\n<div class=\"article-preview\"\n  [hidden]=\"loading || results.length\">\n  No articles are here... yet.\n</div>\n\n<nav [hidden]=\"loading || totalPages <= 1\">\n  <ul class=\"pagination\">\n\n    <li class=\"page-item\"\n      [ngClass]=\"{'active': pageNumber === currentPage}\"\n      *ngFor=\"let pageNumber of totalPages\"\n      (click)=\"setPageTo(pageNumber)\">\n\n      <a class=\"page-link\" href=\"#\">{{ pageNumber }}</a>\n\n    </li>\n\n  </ul>\n</nav>\n\n"
        }), 
        __metadata('design:paramtypes', [index_2.ArticlesService])
    ], ArticleListComponent);
    return ArticleListComponent;
}());
exports.ArticleListComponent = ArticleListComponent;
//# sourceMappingURL=article-list.component.js.map