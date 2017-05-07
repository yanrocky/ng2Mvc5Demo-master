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
var profile_articles_component_1 = require('./profile-articles.component');
var profile_component_1 = require('./profile.component');
var profile_favorites_component_1 = require('./profile-favorites.component');
var profile_resolver_service_1 = require('./profile-resolver.service');
var index_1 = require('../shared/index');
var profileRouting = router_1.RouterModule.forChild([
    {
        path: 'profile/:username',
        component: profile_component_1.ProfileComponent,
        resolve: {
            profile: profile_resolver_service_1.ProfileResolver
        },
        children: [
            {
                path: '',
                component: profile_articles_component_1.ProfileArticlesComponent
            },
            {
                path: 'favorites',
                component: profile_favorites_component_1.ProfileFavoritesComponent
            }
        ]
    }
]);
var ProfileModule = (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        core_1.NgModule({
            imports: [
                profileRouting,
                index_1.SharedModule
            ],
            declarations: [
                profile_articles_component_1.ProfileArticlesComponent,
                profile_component_1.ProfileComponent,
                profile_favorites_component_1.ProfileFavoritesComponent
            ],
            providers: [
                profile_resolver_service_1.ProfileResolver
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ProfileModule);
    return ProfileModule;
}());
exports.ProfileModule = ProfileModule;
//# sourceMappingURL=profile.module.js.map