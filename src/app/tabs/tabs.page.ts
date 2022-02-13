import {UserModel} from '../models/user.model';
import {Component, OnInit} from '@angular/core';
import {CounterService} from '../services/counter/counter.service';
import {UserService} from '../services/user/user.service';
import {BehaviorSubject} from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { ModalController} from '@ionic/angular';
import { TinderGoldPage } from '../pages/tinder-gold/tinder-gold.page';

export const counterSubject = new BehaviorSubject(0); // 0 is the initial value

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})


export class TabsPage implements OnInit {

    public counter: any;
    public user: UserModel;

    constructor(
        public userService: UserService,
        public counterService: CounterService,
        private authService: AuthService,
        private modalCtrl: ModalController,
    ) {
    }

    async popupNotification(type) {
        const modal = await this.modalCtrl.create({
            component: TinderGoldPage,
            swipeToClose: true,
            componentProps: {
                type
            },
            cssClass: 'custom-modal-small',
        });
        return await modal.present();
    }

    ngOnInit(): void {
        this.userService.getUser();
        //this.popupNotification('photoReject');
            this.counterService.getByUserId(this.userService.user?.id).subscribe(result => {
                this.counter = result.payload.data();
                counterSubject.next(this.counter);
                counterSubject.subscribe();
                /*counterSubject.subscribe({
                    next: (v) => {
                    }
                });*/
            });
    }
}
