const initial_Register_State = {
    user: '',
};

export default (state = initial_Register_State, action) => {
    switch (action.type) {
        case 'user_login_or_register_failed':
            return { ...state};
        default:
            return state;
    }
}; 