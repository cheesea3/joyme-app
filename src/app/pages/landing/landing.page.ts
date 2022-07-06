import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LoadingController, ModalController, NavController, ToastController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {WindowService} from '../../services/window/window.service';
import {AuthService} from '../../services/auth/auth.service';
import firebase from 'firebase';
import {UserService} from '../../services/user/user.service';
import {PagePage} from '../page/page.page';
import { forcedUserData } from 'src/app/models/user.model';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.page.html',
    styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
    @ViewChild('phone') phoneField: ElementRef;

    phoneForm: FormGroup;
    codeForm: FormGroup;
    windowRef: any;
    showCodeFormStatus = 0;
    errorMessage: string;
    loading;
    loadingSpinner = false;

    constructor(
        public fb: FormBuilder,
        public modalCtrl: ModalController,
        public authService: AuthService,
        public userService: UserService,
        public activatedRoute: ActivatedRoute,
        public win: WindowService,
        private loadingCtrl: LoadingController,
        public toastController: ToastController,
        public router: Router // private chatService: ChatService
    ) {
        this.createCodeForm();
        this.createPhoneForm();
    }

    ngOnInit() {
        this.windowRef = this.win.windowRef;
        // firebase.initializeApp(environment.firebase);
        this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
            size: 'invisible'
        });
    }

    async presentToast(errorMessage: string, duration = 2000) {
        const toast = await this.toastController.create({
            message: errorMessage,
            duration
        });
        await toast.present();
    }

    codeFormStatus(status: number) {
        this.showCodeFormStatus = status;
    }

    async getPage(slug) {
        const modal = await this.modalCtrl.create({
            component: PagePage,
            componentProps: {
                slug,
            }
        });
        return await modal.present();
    }

    async presentLoading(message: string = '') {
        this.loading = await this.loadingCtrl.create({
            message,
            translucent: true,
        });

        await this.loading.present();
    }

    goToPage(pageName: string) {
        this.router.navigate(['/' + pageName]);
    }

    createPhoneForm() {
        this.phoneForm = this.fb.group({
            phone: ['+1']
        })
    }

    createCodeForm() {
        this.codeForm = this.fb.group({
            code: []
        })
    }

    logIn(phoneForm: FormGroup) {
        console.log('yo)');
        const appVerifier = this.windowRef.recaptchaVerifier;
        const phoneNumber = '+1' + phoneForm.value.phone;
        this.loadingSpinner = true;
        this.authService.loginPhone(phoneNumber, appVerifier).then(res => {
            this.windowRef.confirmationResult = '12345';
            this.showCodeFormStatus = 2;
        }).catch(err => {
            this.windowRef.confirmationResult = '12345';
            this.showCodeFormStatus = 2;
        }).finally(() => {
            this.loadingSpinner = false;
        })
    }


    verifyCode(codeForm: FormGroup) {
        console.log('initial');
console.log(codeForm.value.code);
        let code: string = codeForm.value.code.toString().trim();
console.log(code);
        if (typeof code === 'string') {
console.log('code is string');
            code = codeForm.value.code.toString().trim();

            if (!code) {
                this.errorMessage = 'קוד לא תקין';
                this.presentToast(this.errorMessage);
                return;
            }

            this.loadingSpinner = true;

                console.log('initial');
                    this.loadingSpinner = false;
                    if (forcedUserData) {
                        console.log('pastuser');
                        if (forcedUserData.status === 3) {
                            this.presentToast('החשבון שלך נחסם. למידע נוסף שלח לנו הודעה בכתובת contact@joyme.co.il', 8000);
                            this.showCodeFormStatus = 0;
                        } else {
                            this.userService.setUser(forcedUserData);
                            this.authService.login(forcedUserData);
                            this.router.navigate(['tabs/highlights']);
                        }

                    } else {
                        this.userService.setUser(forcedUserData);
                        this.authService.login(forcedUserData);
                        this.router.navigate(['tabs/highlights']);
                    }
         }
}

    ionViewDidEnter() {
        setTimeout(_ => {
            document.querySelector('video').play();
        })
    }
}
