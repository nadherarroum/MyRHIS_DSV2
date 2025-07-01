import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {

  @Input() img: string = './assets/images/default-avatar.png';
  @Input() colorBorder: string = '#2196f3';
  @Input() canHaseColorBorder: boolean = false;
  @Input() class: string = '';
  @Input() alt: string = 'Avatar';

}
