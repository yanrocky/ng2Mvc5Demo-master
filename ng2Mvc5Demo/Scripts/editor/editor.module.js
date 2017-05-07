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
var editor_component_1 = require('./editor.component');
var editable_article_resolver_service_1 = require('./editable-article-resolver.service');
var index_1 = require('../shared/index');
var editorRouting = router_1.RouterModule.forChild([
    {
        path: 'editor',
        component: editor_component_1.EditorComponent,
        canActivate: [index_1.AuthGuard]
    },
    {
        path: 'editor/:slug',
        component: editor_component_1.EditorComponent,
        canActivate: [index_1.AuthGuard],
        resolve: {
            article: editable_article_resolver_service_1.EditableArticleResolver
        }
    }
]);
var EditorModule = (function () {
    function EditorModule() {
    }
    EditorModule = __decorate([
        core_1.NgModule({
            imports: [
                editorRouting,
                index_1.SharedModule
            ],
            declarations: [
                editor_component_1.EditorComponent
            ],
            providers: [
                editable_article_resolver_service_1.EditableArticleResolver
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], EditorModule);
    return EditorModule;
}());
exports.EditorModule = EditorModule;
//# sourceMappingURL=editor.module.js.map