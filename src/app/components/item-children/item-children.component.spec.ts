import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { genealogyDataTest } from '../genealogy-tree/genealogy-tree.component.spec';
import { ItemChildComponent } from '../item-child/item-child.component';
import { KeysPipe } from '../keys/keys.pipe';
import { ItemChildrenComponent } from './item-children.component';


describe('ItemChildrenComponent', () => {
  let component: ItemChildrenComponent;
  let fixture: ComponentFixture<ItemChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatCheckboxModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
      ],
      declarations: [
        ItemChildrenComponent,
        ItemChildComponent,
        KeysPipe,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemChildrenComponent);
    component = fixture.componentInstance;
    component.formGroup = new FormGroup({});
    component.children = genealogyDataTest,
      fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should subscribe name', () => {
    expectAsync(component.formGroup.valueChanges.toPromise()).toBeResolved();
    component.formGroup.get('0').get('name').setValue('Nome');
  });
});
