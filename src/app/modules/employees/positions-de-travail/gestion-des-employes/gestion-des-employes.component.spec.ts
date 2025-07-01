import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDesEmployesComponent } from './gestion-des-employes.component';

describe('GestionDesEmployesComponent', () => {
  let component: GestionDesEmployesComponent;
  let fixture: ComponentFixture<GestionDesEmployesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestionDesEmployesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionDesEmployesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
