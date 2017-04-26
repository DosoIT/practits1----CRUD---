import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'สนามซ้อมรบ CRUD ด้วย Ng 2 ';
  public dataArr: any;
  public myForm: FormGroup;
  constructor() {
    this.dataArr = [
      { id: 1, name: 'Pongsiri', age: 21 },
      { id: 2, name: 'Pongsiri', age: 22 },
      { id: 3, name: 'Pongsiri', age: 23 },
    ]

    this.myForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      age: new FormControl('')
    });
  } //constructor

  Added() {
    // console.log(this.myForm.getRawValue());
    let formVal = this.myForm.getRawValue();
    this.dataArr.push({
      id: formVal.id,
      name: formVal.name,
      age: formVal.age
    })
    this.myForm.reset();
  }//Added

  Edit(item) {
    // console.log(item);
    this.myForm.controls['id'].setValue(item.id);
    this.myForm.controls['name'].setValue(item.name);
    this.myForm.controls['age'].setValue(item.age);
  }//Edit

  Update() {
    console.log(this.myForm.getRawValue());
    const frmVal = this.myForm.getRawValue();
    const index = this.dataArr.findIndex(data => data.id === frmVal.id)
    this.dataArr[index].id = frmVal.id;
    this.dataArr[index].name = frmVal.name;
    this.dataArr[index].age = frmVal.age;
    this.myForm.reset()
  }//Update
  Delete(indexID) {
    const DelID = this.dataArr.findIndex(data => data.id == indexID.id);
    this.dataArr.splice(DelID, 1);
    console.log("Delete ID : " + DelID);
  }
}
