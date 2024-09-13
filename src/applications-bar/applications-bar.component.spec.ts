import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsBarComponent } from './applications-bar.component';

describe('ApplicationsBarComponent', () => {
  let component: ApplicationsBarComponent;
  let fixture: ComponentFixture<ApplicationsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationsBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
