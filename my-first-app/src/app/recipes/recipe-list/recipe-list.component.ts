import { Component, OnInit } from '@angular/core';
import { recipe } from '../recipe.Model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: recipe[] = [new recipe('A Test Recipe','This is simply a test','https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg')];
  constructor() { }
  ngOnInit(){

  }

}
