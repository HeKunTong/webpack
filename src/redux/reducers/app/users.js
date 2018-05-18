import { createReducer } from 'UTIL';
import { handlers } from 'ACTION/app/users';
import initState from 'STORE/initState';

export default createReducer(initState.users, handlers);