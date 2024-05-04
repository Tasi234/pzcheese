import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, Validators, FormGroup, FormControl, NgForm, FormsModule } from '@angular/forms';


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
  //create a variable to the spec defined in the cheese interface 

  qtyCalcForm: FormGroup = new FormGroup({
    qtyReq: new FormControl(null),
    qtySub: new FormControl(null)
  });


  constructor(private cheeseService: CheeseService) {}

  ngOnInit(): void {
    //on page load call the api and pull the data to fill
    this.cheeseService.getCheese().subscribe((cheeseList) => {
      this.cheeseList = cheeseList;
    });
  }

  math: number = 0;
  qtyCalc() {
    const qtyMath: number = 
      this.qtyCalcForm.value.qtyReq * 123;
      //calculator functionality flawed as there must be an easier way to manage 
      //the inputs needed to get the math done correctly and have it lay out in 
      //table in an apprioprate fashion. 

  }

  // testResult: boolean = false;
  // unitTest1() {
  //   if (this.math == this.cheeseList([1][4])) {
  //     this.testResult = true 
  //   } else {
  //     this.testResult = false;    }
  //   }

  //unit test for calculator function - fail. 
}
