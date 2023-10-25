import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogLogOutComponent } from './dialog-log-out.component';

describe('DialogLogOutComponent', () => {
  let component: DialogLogOutComponent;
  let fixture: ComponentFixture<DialogLogOutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogLogOutComponent]
    });
    fixture = TestBed.createComponent(DialogLogOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
