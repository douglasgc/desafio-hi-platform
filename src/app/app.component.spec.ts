import { TestBed } from '@angular/core/testing';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable, of } from 'rxjs';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { genealogyDataTest } from './components/genealogy-tree/genealogy-tree.component.spec';
import { GenealogyService } from './genealogy.service';

class MockGenealogyService {
  getGenealogyData(): Observable<any> {
    return of(genealogyDataTest);
  }
  setGenealogyDataLocal(data: any): any {
    return {};
  }
}


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        ComponentsModule,
        MatProgressSpinnerModule,
        BrowserAnimationsModule,
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: GenealogyService, useClass: MockGenealogyService }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Prova Front-End HiPlatform'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Prova Front-End HiPlatform');
  });
});
