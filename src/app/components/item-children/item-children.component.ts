import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { cascadingFormGroup } from '../utils/cascading-value';

@Component({
  selector: 'app-item-children',
  templateUrl: './item-children.component.html',
  styleUrls: ['./item-children.component.scss']
})
export class ItemChildrenComponent implements OnInit {

  @Input()
  formGroup: FormGroup;

  @Input()
  children: any;

  constructor() { }

  ngOnInit(): void {
    this.buildFormGroup();
  }
  buildFormGroup(): void {
    if (!this.formGroup) { return; }
    Object.keys(this.children)
      .map((key) => {
        const item = this.children[key];
        item.key = key;
        return item;
      })
      .forEach((item) => {
        const control = new FormGroup(
          {
            value: new FormControl(item.value ?? false),
            name: new FormControl(item.name),
            id: new FormControl(item.id),
            level: new FormControl(item.level),
          }
        );
        if (item.children && Object.keys(item.children).length > 0) {
          control.addControl('children', new FormGroup({}));
          control
            .get('value').valueChanges
            .subscribe((value: boolean) => cascadingFormGroup(value, control.get('children') as FormGroup));
        }
        this.formGroup.addControl(item.key, control);
      });
  }
}
