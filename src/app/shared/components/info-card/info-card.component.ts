import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.scss'
})
export class InfoCardComponent {

  @Input() header: string = '';
  @Input() subheader?: string;
  @Input() icon?: string;
  @Input() editable: boolean = false;
  @Input() rows: { label: string, value: string }[] = [];

}
