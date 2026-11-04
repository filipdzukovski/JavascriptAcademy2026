import { configureStore } from '@reduxjs/toolkit' //za kreiranje na prodavnicata
import { createLogger } from 'redux-logger'; // fiskalen aparat
import SayHelloReducer from './reducer/SayHelloReducer'; // vraboten (prodavac)

const reducer = {
    // sojuz na vraboteni / lista na vraboteni
    SayHelloReducer: SayHelloReducer
}

const logger = createLogger(); //bazdaram fiskalen aparat


export default configureStore({ //otvaranje na prodavnicata
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) //oprema za rabota
})
