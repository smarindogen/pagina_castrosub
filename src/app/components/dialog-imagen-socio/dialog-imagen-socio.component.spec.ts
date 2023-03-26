import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogImagenSocioComponent } from './dialog-imagen-socio.component';

describe('DialogImagenSocioComponent', () => {
  let component: DialogImagenSocioComponent;
  let fixture: ComponentFixture<DialogImagenSocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogImagenSocioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogImagenSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
