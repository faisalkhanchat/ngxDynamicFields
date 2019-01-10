
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-menu-single',
  templateUrl: './add-menu-single.component.html',
  styleUrls: ['./add-menu-single.component.scss']
})
export class AddMenuSingleComponent implements OnInit {
  menuForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.menuForm = this.fb.group({
      categoryName: [],
      menu_items: this.fb.array([this.fb.group({ menuItemName: '', menuItemPrice: '' })])
    });
  }

  ngOnInit() {
  }


  get menu_items() {
    return this.menuForm.get('menu_items') as FormArray;
  }
  /////// This is new /////////////////

  addSellingPoint() {
    this.menu_items.push(this.fb.group({ menuItemName: '', menuItemPrice: '' }));
  }

  deleteSellingPoint(index) {
    this.menu_items.removeAt(index);
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
