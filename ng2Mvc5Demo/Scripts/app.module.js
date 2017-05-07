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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var article_module_1 = require('./article/article.module');
var auth_module_1 = require('./auth/auth.module');
var editor_module_1 = require('./editor/editor.module');
var home_module_1 = require('./home/home.module');
var profile_module_1 = require('./profile/profile.module');
var settings_module_1 = require('./settings/settings.module');
var index_1 = require('./shared/index');
var rootRouting = router_1.RouterModule.forRoot([], { useHash: true });
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                index_1.FooterComponent,
                index_1.HeaderComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                article_module_1.ArticleModule,
                auth_module_1.AuthModule,
                editor_module_1.EditorModule,
                home_module_1.HomeModule,
                profile_module_1.ProfileModule,
                rootRouting,
                index_1.SharedModule,
                settings_module_1.SettingsModule
            ],
            providers: [
                index_1.ApiService,
                index_1.ArticlesService,
                index_1.AuthGuard,
                index_1.CommentsService,
                index_1.JwtService,
                index_1.ProfilesService,
                index_1.TagsService,
                index_1.UserService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map