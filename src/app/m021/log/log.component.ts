import {Component, OnInit} from '@angular/core';
import {Input} from '@angular/core';
import {ChangeDetectorRef} from '@angular/core';


@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  @Input() logs: string[] = [];

  autoRefresh: boolean = false;

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.changeDetector.detach();
    setInterval(() => {
      if (this.autoRefresh === true) {
        this.render();
      }
    }, 2500);
  }

  render() {
    this.changeDetector.reattach();
    this.changeDetector.detectChanges();
    this.changeDetector.detach();
  }

  refresh() {
    this.render();
  }

  start() {
    this.autoRefresh = true;
  }

  stop() {
    this.autoRefresh = false;
  }

}
