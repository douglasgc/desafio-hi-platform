import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-item-child',
  templateUrl: './item-child.component.html',
  styleUrls: ['./item-child.component.scss']
})
export class ItemChildComponent implements OnInit {

  @Input()
  formGroup: FormGroup;

  @Input()
  child: any;

  open: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toogleChildren() {
    this.open = !this.open;
  }
  someComplete(children: any): boolean {
    if (!children) return false;
    return Object.keys(children.controls)
      .map((key) => {
        let item = children.get(key);
        return item.get('value');
      })
      .some((item) => item.value === true)
  }
}
