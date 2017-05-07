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
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var index_1 = require('./article-helpers/index');
var index_2 = require('./buttons/index');
var list_errors_component_1 = require('./list-errors.component');
var show_authed_directive_1 = require('./show-authed.directive');
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                router_1.RouterModule
            ],
            declarations: [
                index_1.ArticleListComponent,
                index_1.ArticleMetaComponent,
                index_1.ArticlePreviewComponent,
                index_2.FavoriteButtonComponent,
                index_2.FollowButtonComponent,
                list_errors_component_1.ListErrorsComponent,
                show_authed_directive_1.ShowAuthedDirective
            ],
            exports: [
                index_1.ArticleListComponent,
                index_1.ArticleMetaComponent,
                index_1.ArticlePreviewComponent,
                common_1.CommonModule,
                index_2.FavoriteButtonComponent,
                index_2.FollowButtonComponent,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                list_errors_component_1.ListErrorsComponent,
                router_1.RouterModule,
                show_authed_directive_1.ShowAuthedDirective
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map