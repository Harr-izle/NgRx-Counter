import { selectCounterState, selectCount } from './counter.selector';
import { CounterState } from './counter.reducer';
import { AppState } from '../app.state';

describe('Counter Selectors', () => {

  it('should select the counter state', () => {
    const counterState: CounterState = {
      count: 10
    };
    const appState: AppState = {
      counter: counterState
    };

    const result = selectCounterState(appState);
    expect(result).toEqual(counterState);
  });

  it('should select the count from the counter state', () => {
    const counterState: CounterState = {
      count: 10
    };
    const appState: AppState = {
      counter: counterState
    };

    const result = selectCount(appState);
    expect(result).toEqual(10);
  });

  it('should return 0 as the default count when the state is empty', () => {
    const emptyAppState: AppState = {
      counter: {
        count: 0
      }
    };

    const result = selectCount(emptyAppState);
    expect(result).toEqual(0);
  });

});
