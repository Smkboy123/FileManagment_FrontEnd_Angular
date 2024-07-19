import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeTicketComponent } from './take-ticket.component';

describe('TakeTicketComponent', () => {
  let component: TakeTicketComponent;
  let fixture: ComponentFixture<TakeTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakeTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
