import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosSociosComponent } from './documentos-socios.component';

describe('AnadirSocioComponent', () => {
  let component: DocumentosSociosComponent;
  let fixture: ComponentFixture<DocumentosSociosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentosSociosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentosSociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
