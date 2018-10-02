import { assert } from 'chai';
import initState from './initState.js';

describe('Initializing State function', () => {
   it('should create a fresh state', () => {
      var initialState = initState("2018-10-2");
      
      console.log(initialState);
   });
});