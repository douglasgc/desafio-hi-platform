import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemChildrenComponent } from './item-children.component';

describe('ItemChildrenComponent', () => {
  let component: ItemChildrenComponent;
  let fixture: ComponentFixture<ItemChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemChildrenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
