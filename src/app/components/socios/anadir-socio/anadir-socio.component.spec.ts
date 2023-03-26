import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirSocioComponent } from './anadir-socio.component';

describe('AnadirSocioComponent', () => {
  let component: AnadirSocioComponent;
  let fixture: ComponentFixture<AnadirSocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnadirSocioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnadirSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
