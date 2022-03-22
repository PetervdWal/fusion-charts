import { Component, OnInit } from '@angular/core';
import { data } from './data';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements OnInit {
  dataSource = data;

  constructor() {}

  ngOnInit(): void {}
}
