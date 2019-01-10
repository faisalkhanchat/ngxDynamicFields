// import { MenuService } from './menu.service';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.scss']
})
export class AddMenuComponent implements OnInit {
  menuForm: FormGroup;
  constructor(private fb: FormBuilder) {
  this.menuForm = this.fb.group({
    menuCategories: this.fb.array([
      this._createCategory()
    ])
  });

  }

  ngOnInit() {
  }
  private _createCategory(): FormGroup {
    return this.fb.group({
      categoryName: [],  menu_items: this.fb.array([this.fb.group({menuItemName: '', menuItemPrice: ''})])
    });
  }

    ///////   add category items  /////////////////

  get menuCategories() {
    return this.menuForm.get('menuCategories') as FormArray;
  }

  addCategories() {
     this.menuCategories.push(this._createCategory());
  }

  removeCategories(index) {
   this.menuCategories.removeAt(index);
  }


  ///////   add menu items  /////////////////

  menu_items(index: number) {
    const menuCategories = this.menuForm.get('menuCategories') as FormArray;
    return menuCategories.at(index).get('menu_items') as FormArray;
  }
  private _createMenu(): FormGroup {
    return this.fb.group({menuItemName: [], menuItemPrice: []});
  }
  addMenuItem(index: number) {
    this.menu_items(index).push(this._createMenu());
  }

  removeMenuItem(cIndex: number, mIndex: number) {
    console.log(cIndex, mIndex);
    this.menu_items(cIndex).removeAt(mIndex);
  }

  //////////// End ////////////////////



  addMenu() {
    alert('submitted check console');
    if (this.menuForm.invalid) {
      return;
    }

    const data = this.menuForm.value;
    console.log(data);

  }

}
