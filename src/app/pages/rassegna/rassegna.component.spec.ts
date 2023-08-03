import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RassegnaComponent } from './rassegna.component';

describe('RassegnaComponent', () => {
  let component: RassegnaComponent;
  let fixture: ComponentFixture<RassegnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RassegnaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RassegnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
