import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent, FormsModule],
      providers: [
        provideMockStore({
          initialState: {
            counter: { count: 0 }
          }
        })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
