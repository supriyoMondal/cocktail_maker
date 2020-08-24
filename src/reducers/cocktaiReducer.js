const initialState = {
    alcoholic: ['Alcoholic', 'Non alcoholic', 'Optional alcohol']
}

export default function (state = initialState, action) {
    let { type, payload } = action;
    switch (type) {


        default:
            return state;
    }
}