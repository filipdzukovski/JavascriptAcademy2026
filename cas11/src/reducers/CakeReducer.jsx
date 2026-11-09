import {BUY_CAKE,RESTOCK_CAKES} from './../constants/CakeConstants';

const initialState = {
    cakes: 10
    // da se dodade varijabla 
    //koja koga ke se kliknat poveke torti za kupuvanje od sto ima
    //ke se prikaze greska
    //odnosno na primer
    //klik na buy 3 cakes a ima samo 2 vo stock
    //poraka: not enough Cakes only 2 left !!!
}

const CakeReducer = (state=initialState,action) => {

    switch(action.type){

        case BUY_CAKE:
            return{
                ...state,
                        // 10            // 1
                cakes: state.cakes - action.payload
            }
        case RESTOCK_CAKES:
            return{
                ...state,
                cakes: state.cakes + action.payload
            }

        default: return state;
    }

}

export default CakeReducer;