import { Component } from '@angular/core';

@Component({
  selector: 'layout-footer',
  templateUrl: './tsScripts/shared/layout/footer.component.html'
})
export class FooterComponent {
  today: number = Date.now();
}
