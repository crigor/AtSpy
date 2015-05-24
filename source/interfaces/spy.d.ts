/// <reference path="./call.d.ts"/>

/*
* Spy
*/

interface ISpy {

  //Return the recorded calls.
  getCalls(): ICall[];

  // The number of recorded calls.
  callCount(): number;

  // true if the spy was called at least once
  called(): boolean;

  // true if spy was called exactly once
  calledOnce(): boolean;

  // true if the spy was called exactly twice
  calledTwice(): boolean;

  // true if the spy was called exactly thrice
  calledThrice(): boolean;

  // The first call
  firstCall(): ICall;

  // The second call
  secondCall(): ICall;

  // The third call
  thirdCall(): ICall;

  // The last call
  lastCall(): ICall;

  // The n call
  getCall(n: number): ICall;

  // Returns true if the spy was called before anotherSpy
  // NOTE based on SinonJS not sure aboit being able to do this with the
  // decorator approach. Maybe we can store the performance now() API ?
  // http://updates.html5rocks.com/2012/08/When-milliseconds-are-not-enough-performance-now
  calledBefore(anotherSpy): boolean;

  // Returns true if the spy was called after anotherSpy
  // NOTE based on SinonJS not sure aboit being able to do this with the
  // decorator approach. Maybe we can store the performance now() API ?
  // http://updates.html5rocks.com/2012/08/When-milliseconds-are-not-enough-performance-now
  calledAfter(anotherSpy): boolean;

  //  Returns true if the spy was called at least once with obj as this.
  calledOn(obj): boolean;

  // Returns true if the spy was always called with obj as this.
  alwaysCalledOn(obj): boolean;

  // Returns true if spy was called at least once with the provided arguments.
  calledWith(...args: any[]): boolean;

  // Returns true if spy was always called with the provided arguments (and possibly others).
  alwaysCalledWith(...args: any[]): boolean;

  // Returns true if spy was called at least once with the provided arguments and no others.
  calledWithExactly(...args: any[]): boolean;

  // Returns true if spy was always called with the exact provided arguments.
  alwaysCalledWithExactly(...args: any[]): boolean;

  // Returns true if spy was called with matching arguments (and possibly others).
  calledWithMatch(...args: any[]): boolean;

  // Returns true if spy was always called with matching arguments (and possibly others).
  alwaysCalledWithMatch(...args: any[]): boolean;

  // Returns true if spy was called the new operator.
  calledWithNew(): boolean;

  // Returns true if the spy/stub was never called with the provided arguments.
  neverCalledWith(...args: any[]): boolean;

  // Returns true if the spy/stub was never called with matching arguments.
  neverCalledWithMatch(...args: any[]): boolean;

  // Returns true if spy threw an exception or  an exception of the provided type at least once.
  threw(obj?: any): boolean;

  // Returns true if spy always threw an exception.
  alwaysThrew(obj?: any): boolean;

  // Returns true if spy returned the provided value at least once.
  returned(obj: any): boolean;

  // Returns true if spy always returned the provided value.
  alwaysReturned(obj: any): boolean;

  // Resets the state of a spy.
  reset(): void;
}