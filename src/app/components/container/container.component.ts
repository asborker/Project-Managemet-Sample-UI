import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    localStorage.clear();
  }
}
