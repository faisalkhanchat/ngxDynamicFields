// import { VALIDATION_MESSAGES } from './../../../../constant/messages';
// import { UtilityService } from './../../../shared/services/utility.service';
// import { FormBuilder, FormControl } from '@angular/forms';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class MenuService {

//   constructor(
//     private _formBuilder: FormBuilder,
//     private _utilityServices: UtilityService
//   ) { }
//   /*
//       Method For Creating Menu Form
//   */
//   createMenuForm() {
//     return this._formBuilder.group(
//       {
//         categoryName: this._utilityServices.getNameFormControl(),
//         // menuItemName: this._utilityServices.getNameFormControl(),
//         // catItemInfo: this._formBuilder.array(this._formBuilder.group({
//         //   menuItemName: '',
//         //   menuItemName: ''
//         // })),
//       }
//     );
//   }

//   // get sellingPoints() {
//   //   return this.productForm.get('selling_points') as FormArray;
//   // }

//   addMenu(data) {
//     console.log(data);
//   }

//   /*
//       Method For Validating Form
//   */

//   getValidationError(control: FormControl, name) {
//     if (control.hasError('required')) {
//       return VALIDATION_MESSAGES[name]['required'];
//     }
//     if (control.hasError('pattern')) {
//       return VALIDATION_MESSAGES[name]['pattern'];
//     }
//     if (control.hasError('minlength')) {
//       return VALIDATION_MESSAGES[name]['minlength'];
//     }
//     if (control.hasError('maxlength')) {
//       return VALIDATION_MESSAGES[name]['maxlength'];
//     }


//   }



// }
