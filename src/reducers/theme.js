import storage from 'local-storage-fallback';
import actions from '../actions/actionsLabels';
import palette from '../assets/style/colors';

export default (state = palette, action) => {
    switch(action.type) {
        case actions.TOGGLE_DARK_MODE :
            storage.setItem('isDark', !state.isDark);
            return {
                ...state,
                isDark: !state.isDark,
            }
        default:
            return state;
    }
};