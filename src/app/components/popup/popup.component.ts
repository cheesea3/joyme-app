import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {

  @Input() type: any;

  public notification: any;
  public notificationType = {
    photoReject: {
        message: 'התמונה שלך הוסרה עקב הפרת מדיניות',
        icon: {
            name: 'person-remove-outline',
            color: '',
        },
    }
}
  constructor() {}

  ngOnInit() {
    this.notification = this.notificationType[this.type];
    console.log(11111);
    console.log(this.notification);
  }

}
