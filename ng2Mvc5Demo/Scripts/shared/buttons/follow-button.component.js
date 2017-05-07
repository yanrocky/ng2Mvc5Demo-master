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
var index_1 = require('../models/index');
var index_2 = require('../services/index');
var FollowButtonComponent = (function () {
    function FollowButtonComponent(profilesService, router, userService) {
        this.profilesService = profilesService;
        this.router = router;
        this.userService = userService;
        this.onToggle = new core_1.EventEmitter();
        this.isSubmitting = false;
    }
    FollowButtonComponent.prototype.toggleFollowing = function () {
        var _this = this;
        this.isSubmitting = true;
        this.userService.isAuthenticated.subscribe(function (authenticated) {
            // Not authenticated? Push to login screen
            if (!authenticated) {
                _this.router.navigateByUrl('/login');
                return;
            }
            // Follow this profile if we aren't already
            if (!_this.profile.following) {
                _this.profilesService.follow(_this.profile.username)
                    .subscribe(function (data) {
                    _this.isSubmitting = false;
                    _this.onToggle.emit(true);
                }, function (err) { return _this.isSubmitting = false; });
            }
            else {
                _this.profilesService.unfollow(_this.profile.username)
                    .subscribe(function (data) {
                    _this.isSubmitting = false;
                    _this.onToggle.emit(false);
                }, function (err) { return _this.isSubmitting = false; });
            }
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', index_1.Profile)
    ], FollowButtonComponent.prototype, "profile", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FollowButtonComponent.prototype, "onToggle", void 0);
    FollowButtonComponent = __decorate([
        core_1.Component({
            selector: 'follow-button',
            templateUrl: './tsScripts/shared/buttons/follow-button.component.html'
        }), 
        __metadata('design:paramtypes', [index_2.ProfilesService, router_1.Router, index_2.UserService])
    ], FollowButtonComponent);
    return FollowButtonComponent;
}());
exports.FollowButtonComponent = FollowButtonComponent;
//# sourceMappingURL=follow-button.component.js.map