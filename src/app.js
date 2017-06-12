import { createStore } from 'redux';

export default function CreateApp () {
  const store = createStore(function (state, action) {
    return state;
  });

  return store;
}
