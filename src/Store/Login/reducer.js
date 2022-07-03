const initialState = {
    name:''
}
const LoginReducer = (state = initialState, action) => {
    let undefinedData;
    switch (action.type) {
        // case types.RESET_ALL_GLAS_STATE_REQUEST:
        //     state = {
        //         ...state,
        //         actionData: undefinedData,
        //         actionType: EOprationalActions.UNSELECT,
        //         glasData: undefinedData,
        //         paginationCurrentPage: 0

        //     }
        //     break;
        default: state = { ...state }
    }
    return state;
}

export default LoginReducer



