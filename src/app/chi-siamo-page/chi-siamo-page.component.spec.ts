import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiSiamoPageComponent } from './chi-siamo-page.component';

describe('ChiSiamoPageComponent', () => {
  let component: ChiSiamoPageComponent;
  let fixture: ComponentFixture<ChiSiamoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChiSiamoPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChiSiamoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
