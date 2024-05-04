import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { CheeseService } from './cheese.service'
import { Cheese } from './cheese.interface'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'pzcheese';
  cheeseList: Cheese[] = [];

  constructor(private cheeseService: CheeseService) {}

  ngOnInit(): void {
    this.cheeseService.getCheese().subscribe((cheeseList) => {
      this.cheeseList = cheeseList;
    });
  }
}
