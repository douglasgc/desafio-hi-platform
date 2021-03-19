import { Component, OnInit } from '@angular/core';
import { GenealogyService } from './genealogy.service';
import { FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Prova Front-End HiPlatform';
  genealogyData: any;
  genealogyFormGroup: FormGroup = new FormGroup({});
  hasError = false;

  constructor(public genealogyService: GenealogyService, private snackBar: MatSnackBar, ) { }

  ngOnInit(): void {
    this.genealogyService.getGenealogyData()
      .subscribe(
        (genealogyData) => this.genealogyData = genealogyData,
        () => this.hasError = true,
      );
    this.genealogyFormGroup.valueChanges
      .pipe(
        debounceTime(1000)
      )
      .subscribe((data) => {
        this.showToastUpdate();
        this.genealogyService.setGenealogyDataLocal(data);
      });
  }
  showToastUpdate(): void {
    this.snackBar.open('Informações salvas.', 'Ok', {
      duration: 600,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }
}
