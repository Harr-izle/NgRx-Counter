import { counterReducer, initialCounterState, CounterState } from './counter.reducer';
import { increment, decrement, reset, setCount } from './counter.action';

describe('CounterReducer', () => {

  it('should return the initial state when an unknown action is passed', () => {
    const unknownAction = { type: 'UNKNOWN' } as any;
    const state = counterReducer(undefined, unknownAction);
    expect(state).toEqual(initialCounterState);
  });

  it('should increment the count', () => {
    const expectedState: CounterState = { count: 1 };
    const state = counterReducer(initialCounterState, increment);
    expect(state).toEqual(expectedState);
  });

  it('should decrement the count', () => {
    const startState: CounterState = { count: 1 };
    const expectedState: CounterState = { count: 0 };
    const state = counterReducer(startState, decrement);
    expect(state).toEqual(expectedState);
  });

  it('should reset the count to 0', () => {
    const startState: CounterState = { count: 5 };
    const expectedState: CounterState = { count: 0 };
    const state = counterReducer(startState, reset);
    expect(state).toEqual(expectedState);
  });

  it('should set the count to a specific value', () => {
    const newCount = 42;
    const expectedState: CounterState = { count: newCount };
    const state = counterReducer(initialCounterState, setCount({ count: newCount }));
    expect(state).toEqual(expectedState);
  });
});
