import { NAVTOGGLE } from '../actions/AuthActions';

const initial = false;
export const toggleMenu = (state = initial, action) => {
  if (action.type === NAVTOGGLE) {
    return !state;
  }
  return state;
};