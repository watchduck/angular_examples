import {PanelComponent} from './panel/panel.component';
import {ContentChildren, QueryList, Input, Directive, AfterContentInit} from '@angular/core';


@Directive({
  selector: '[appAccordion]',
  exportAs: 'harmonica'
})
export class AccordionDirective implements AfterContentInit {

  @Input() onlyOneOpen = false;

  @ContentChildren(PanelComponent) listOfPanels!: QueryList<PanelComponent>;

  ngAfterContentInit() {
    this.listOfPanels.forEach((loopPanel) => {
      loopPanel.open = false;
      loopPanel.toggleEmitter.subscribe(nextPanel => {  // nextPanel === loopPanel
        if (nextPanel.open && this.onlyOneOpen) {
          this.closeOthers(nextPanel);
        }
      });
    });
  }

  closeOthers(openedPanel: PanelComponent) {
    for (const loopPanel of this.listOfPanels.toArray()) {
      if (loopPanel.open && loopPanel !== openedPanel) {
        loopPanel.open = false;
      }
    }
  }

  closeAll() {
    console.log(this.listOfPanels.toArray());
    for (const loopPanel of this.listOfPanels.toArray()) {
      loopPanel.open = false;
    }
  }

}
