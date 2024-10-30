import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoveSiamoPageComponent } from './dove-siamo-page.component';

describe('DoveSiamoPageComponent', () => {
  let component: DoveSiamoPageComponent;
  let fixture: ComponentFixture<DoveSiamoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoveSiamoPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoveSiamoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
