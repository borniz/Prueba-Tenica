import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationSelectionComponent } from './destination-selection.component';

describe('DestinationSelectionComponent', () => {
  let component: DestinationSelectionComponent;
  let fixture: ComponentFixture<DestinationSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinationSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinationSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
