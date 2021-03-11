import { Counter } from '../../pages/index';

interface userState {
  route: string;
  key: string;
  module: string;
  menu: boolean;
  component: React.FC;
}

const initialState: userState[] = [
  { route: '/counter', key: 'counter', module: 'counter', menu: true, component: Counter },
  { route: '/sair', key: 'Sair', module: 'sair', menu: true, component: Counter },
];

export default initialState;

/*
const INITIAL_STATE = {
  auth: null,
  processing: false,
  rotas: INITIAL_ROTAS,
  usuario: null,
};

export default INITIAL_STATE;
*/
/*export function usuarios(state = INITIAL_STATE, action) {
  if (action.type === usuarioTypes.LOGIN_REQUEST) {
    return { ...state, processing: true };
  } else if (action.type === usuarioTypes.LOGIN_FAILURE || action.type === usuarioTypes.LOGIN_SUCCESS) {
    return { ...state, processing: false };
  } else if (action.type === usuarioTypes.LOGOUT) {
    storageUtil.removeItem('BR_user');
    storageUtil.removeItem('BR_auth');
    return { ...INITIAL_STATE };
  } else if (action.type === usuarioTypes.SET_AUTH) {
    storageUtil.setItem('BR_auth', action.auth);
    return { ...state, auth: action.auth };
  } else if (action.type === usuarioTypes.SET_CURRENT_USUARIO) {
    storageUtil.setItem('BR_user', action.usuario);
    return { ...state, usuario: action.usuario };
  } else {
    return state;
  }
}
*/
