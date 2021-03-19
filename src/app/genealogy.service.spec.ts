import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { genealogyDataTest } from './components/genealogy-tree/genealogy-tree.component.spec';
import { GenealogyService } from './genealogy.service';


describe('GenealogyService', () => {
  let service: GenealogyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ]
    });
    service = TestBed.inject(GenealogyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('set data in storage', () => {
    expect(service.setGenealogyDataLocal(genealogyDataTest)).toBeUndefined();
  });

  it('get data in storage', () => {
    expect(service.getGenealogyData()).toBeTruthy();
  });
});
