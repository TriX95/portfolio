import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailJsComponent } from './email-js.component';

describe('EmailJsComponent', () => {
  let component: EmailJsComponent;
  let fixture: ComponentFixture<EmailJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailJsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
