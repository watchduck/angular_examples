import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  logs: string[] = [];

  ngOnInit() {
    let counter = 0;
    setInterval(() => {
      const newEntry = `${new Date().toISOString()}: log entry ${counter++}`;
      this.logs = [newEntry, ...this.logs].slice(0, 1000);
    }, 500);
  }

}
