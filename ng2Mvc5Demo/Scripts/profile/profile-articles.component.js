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
var router_1 = require('@angular/router');
var index_1 = require('../shared/index');
var ProfileArticlesComponent = (function () {
    function ProfileArticlesComponent(route, router) {
        this.route = route;
        this.router = router;
        this.articlesConfig = new index_1.ArticleListConfig();
    }
    ProfileArticlesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.data.subscribe(function (data) {
            _this.profile = data.profile;
            _this.articlesConfig.filters.author = _this.profile.username;
        });
    };
    ProfileArticlesComponent = __decorate([
        core_1.Component({
            selector: 'profile-articles',
            templateUrl: './tsScripts/profile/profile-articles.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
    ], ProfileArticlesComponent);
    return ProfileArticlesComponent;
}());
exports.ProfileArticlesComponent = ProfileArticlesComponent;
//# sourceMappingURL=profile-articles.component.js.map