import { Component } from '@angular/core';
import { GenealogyService } from './genealogy.service';
import { FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Prova Front-End HiPlatform';
  genealogyData: any;
  genealogyFormGroup: FormGroup = new FormGroup({});
  hasError = false;

  constructor(public genealogyService: GenealogyService, ) { }

  ngOnInit() {
    this.genealogyService.getGenealogyData()
      .subscribe(
        (genealogyData) => this.genealogyData = genealogyData,
        () => this.hasError = true,
      );
    this.genealogyFormGroup.valueChanges
      .pipe(
        debounceTime(200)
      )
      .subscribe((data) => console.log('informacao atualizada', data));
  }
}
