import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDesPrevisionsComponent } from './gestion-des-previsions.component';

describe('GestionDesPrevisionsComponent', () => {
  let component: GestionDesPrevisionsComponent;
  let fixture: ComponentFixture<GestionDesPrevisionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestionDesPrevisionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionDesPrevisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
