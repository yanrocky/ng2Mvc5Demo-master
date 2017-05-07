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
var index_1 = require('../shared/index');
var ArticleCommentComponent = (function () {
    function ArticleCommentComponent(userService) {
        this.userService = userService;
        this.deleteComment = new core_1.EventEmitter();
    }
    ArticleCommentComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Load the current user's data
        this.userService.currentUser.subscribe(function (userData) {
            _this.canModify = (userData.username === _this.comment.author.username);
        });
    };
    ArticleCommentComponent.prototype.deleteClicked = function () {
        this.deleteComment.emit(true);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', index_1.Comment)
    ], ArticleCommentComponent.prototype, "comment", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ArticleCommentComponent.prototype, "deleteComment", void 0);
    ArticleCommentComponent = __decorate([
        core_1.Component({
            selector: 'article-comment',
            templateUrl: './tsScripts/article/article-comment.component.html',
        }), 
        __metadata('design:paramtypes', [index_1.UserService])
    ], ArticleCommentComponent);
    return ArticleCommentComponent;
}());
exports.ArticleCommentComponent = ArticleCommentComponent;
//# sourceMappingURL=article-comment.component.js.map