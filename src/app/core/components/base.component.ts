import {Injector, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '@core/auth.service';
import {Users} from '@core/core.models';
import {CommonsService} from '@core/commons.service';
import {NotificationsService} from '@core/notifications.service';
import {Events, NavController, PopoverController} from '@ionic/angular';
import UserProfile = Users.UserProfile;

export abstract class BaseComponent implements OnInit {

    protected router: Router;
    protected authService: AuthService;
    protected notificationsService: NotificationsService;
    protected navCtrl: NavController;
    public popoverCtrl: PopoverController;
    loggedProfile: UserProfile;
    events: Events;

    constructor(injector: Injector) {
        this.router = injector.get(Router);
        this.authService = injector.get(AuthService);
        this.notificationsService = injector.get(NotificationsService);
        this.loggedProfile = this.authService.userProfile;
        this.navCtrl = injector.get(NavController);
        this.events = injector.get(Events);
        this.popoverCtrl = injector.get(PopoverController);
    }

    ngOnInit() {
        this.initializeComponent();
    }

    abstract initializeComponent();

    makeServiceCallWithIdIfObjectNull(object, request, call?, error?) {
        if (CommonsService.isNullOrUndefined(object)) {
            if (!CommonsService.isNullOrUndefined(request)) {
                if (!CommonsService.isNullOrUndefined(call)) {
                    call(request);
                }
            } else {
                if (!CommonsService.isNullOrUndefined(error)) {
                    error(request);
                }
            }
        }
    }
}
