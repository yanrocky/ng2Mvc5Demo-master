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
var ProfileFavoritesComponent = (function () {
    function ProfileFavoritesComponent(route, router) {
        this.route = route;
        this.router = router;
        this.favoritesConfig = new index_1.ArticleListConfig();
    }
    ProfileFavoritesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.data.subscribe(function (data) {
            _this.profile = data.profile;
            _this.favoritesConfig.filters.favorited = _this.profile.username;
        });
    };
    ProfileFavoritesComponent = __decorate([
        core_1.Component({
            selector: 'profile-favorites',
            templateUrl: './tsScripts/profile/profile-favorites.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
    ], ProfileFavoritesComponent);
    return ProfileFavoritesComponent;
}());
exports.ProfileFavoritesComponent = ProfileFavoritesComponent;
//# sourceMappingURL=profile-favorites.component.js.map