import {Component, ContentChildren, QueryList, AfterContentInit} from '@angular/core';
import {TabCardComponent} from "../tab-card/tab-card.component";

@Component({
  selector: 'app-tab-stack',
  styleUrls: ['tab-stack.component.css'],
  templateUrl: 'tab-stack.component.html'})
export class TabStackComponent implements AfterContentInit {

  @ContentChildren(TabCardComponent) listOfCards!: QueryList<TabCardComponent>;

  ngAfterContentInit() {
    this.listOfCards.first.active = true;
  }

  activate(thisCard: TabCardComponent) {
    for (const loopCard of this.listOfCards) {
      loopCard.active = false;
    }
    thisCard.active = true;
  }

}
