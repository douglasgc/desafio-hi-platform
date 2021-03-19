import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ClickStopPropagationDirective } from '../click-stop-propagation.directive';
import { ItemChildrenComponent } from '../item-children/item-children.component';
import { KeysPipe } from '../keys/keys.pipe';
import { ItemChildComponent } from './item-child.component';


describe('ItemChildComponent', () => {
  let component: ItemChildComponent;
  let fixture: ComponentFixture<ItemChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ItemChildComponent,
        ItemChildrenComponent,
        KeysPipe,
        ClickStopPropagationDirective,
      ],
      imports: [
        CommonModule,
        MatCheckboxModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemChildComponent);
    component = fixture.componentInstance;
    component.formGroup = new FormGroup(
      {
        value: new FormControl(false),
        name: new FormControl('Name'),
        id: new FormControl('12312312'),
        level: new FormControl('1'),
      }
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should setting value name', async () => {
    expect(component.formGroup.get('name').setValue('SetValue')).toBeUndefined();
  });
  it('should subscribe name', () => {
    expectAsync(component.formGroup.valueChanges.toPromise()).toBeResolved();
    expect(component.formGroup.get('name').setValue('SetValue')).toBeUndefined();
  });
});
