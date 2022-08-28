import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html'
})
export class DocComponent {

  @Input() section!: string;

}
