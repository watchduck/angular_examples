import {Component, ContentChild, Directive} from '@angular/core';


@Directive({
  selector: 'app-panel-header'
})
export class PanelHeaderDirective { }


@Directive({
  selector: 'app-panel-footer'
})
export class PanelFooterDirective { }


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['../panel-style.css']
})
export class PanelComponent {

  open = false;
  @ContentChild(PanelHeaderDirective) panelHeader?: PanelHeaderDirective;
  @ContentChild(PanelFooterDirective) panelFooter?: PanelFooterDirective;

  toggle() {
    this.open = !this.open;
  }

  hasHeader() {
    return this.panelHeader !== undefined;
  }

  hasFooter() {
    return this.panelFooter !== undefined;
  }

}
