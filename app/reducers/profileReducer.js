const initial_Profile_State = {
    hede: '',
};

export default (state = initial_Profile_State, action) => {
    switch (action.type) {
        case 'get_entries':
            return { ...state };
        default:
            return state;
    }
};
