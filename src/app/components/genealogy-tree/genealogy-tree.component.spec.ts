import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ClickStopPropagationDirective } from '../click-stop-propagation/click-stop-propagation.directive';
import { ItemChildComponent } from '../item-child/item-child.component';
import { ItemChildrenComponent } from '../item-children/item-children.component';
import { KeysPipe } from '../keys/keys.pipe';
import { GenealogyTreeComponent } from './genealogy-tree.component';


export const genealogyDataTest = {
  0: {
    id: '8300a71a-db51-4fde-bd0a-4591aa2a4499',
    name: 'Juan Ramón Severo',
    children: {
      0: {
        id: '14ee5eb2-b360-453c-ac09-0dd6ded5b935',
        name: 'Ronald Isaac Bashevis',
        children: {
          0: {
            id: '2706b470-76d7-4ef3-96d0-93963327eca6',
            name: 'Sir Frank Macfarlane Robert F.',
            children: {},
            level: 2
          }
        },
        level: 1
      },
      1: {
        id: '32c7aa98-619d-40bc-8861-75e8136c82ee',
        name: 'Friedrich John Franklin',
        children: {},
        level: 1
      },
      2: {
        id: 'a2bd0253-f34f-465f-94be-b554729f19eb',
        name: 'Ellen John M.',
        children: {},
        level: 1
      },
      3: {
        id: '7349b058-91db-40de-8b33-4b5c4a43a08b',
        name: 'Karl Arthur Holly',
        children: {},
        level: 1
      },
      4: {
        id: '606c1d38-b2d8-46c2-aa2a-9480b0b344d9',
        name: 'Akira Christian Matthias Theodor',
        children: {},
        level: 1
      }
    },
    level: 0
  }
};

describe('GenealogyTreeComponent', () => {
  let component: GenealogyTreeComponent;
  let fixture: ComponentFixture<GenealogyTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        GenealogyTreeComponent,
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
    fixture = TestBed.createComponent(GenealogyTreeComponent);
    component = fixture.componentInstance;
    component.data = genealogyDataTest;
    component.formGroup = new FormGroup({});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
