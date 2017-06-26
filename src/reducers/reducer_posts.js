import { FETCH_POSTS, FETCH_POST, DELETE_POST } from "../actions";

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            // action.payload.data -> [post1, post2, ...]
            // need to transform to { 4: post_with_id_4 }
            return action.payload.data.reduce((storageObj, post) => {
                storageObj[post.id] = post;
                return storageObj;
            } , {});
            break;
        case FETCH_POST:
            // const newState = {
            //     [action.payload.data.id]: action.payload.data
            // };
            // return Object.assign(newState, state)
            return { ...state, [action.payload.data.id]: action.payload.data };
            break;
        case DELETE_POST:
            const newState = {...state};
            delete newState[action.payload];
            return newState;
        default:
            return state;
    }
}
