
export default function todoReducer(state=[],action){

    switch(action.type){
        case 'ADD_TODO':
        var text = action.text;
        return[
            ...state,
            {
                id:(state.length+1),
                text,
                completed:false,
            }


        ];

        case 'SHOW_TODO':
        return state;

        default:
        return state;

    }

}
