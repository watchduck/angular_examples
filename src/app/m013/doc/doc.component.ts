import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css']
})
export class DocComponent {

  @Input() section!: string;

}
