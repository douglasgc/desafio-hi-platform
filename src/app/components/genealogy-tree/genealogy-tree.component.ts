import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-genealogy-tree',
  templateUrl: './genealogy-tree.component.html',
  styleUrls: ['./genealogy-tree.component.scss']
})
export class GenealogyTreeComponent implements OnInit {

  @Input()
  formGroup: FormGroup;

  @Input()
  data: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
