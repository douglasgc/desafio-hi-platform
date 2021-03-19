import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-genealogy-tree',
  templateUrl: './genealogy-tree.component.html',
  styleUrls: ['./genealogy-tree.component.scss']
})
export class GenealogyTreeComponent {

  @Input()
  formGroup: FormGroup;

  @Input()
  data: any;

  constructor() { }

}
