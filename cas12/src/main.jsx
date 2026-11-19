import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App.jsx';
import { Users } from './components/users';
import { Posts } from './components/posts';
import { Login } from './auth/Login.jsx';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.jsx';
import { PrivateRoute } from './utils/PrivateRoute.jsx';
import { AlbumsWithHooks } from './components/AlbumsWithHook.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Router>
            <Routes>
                <Route index path='/login' element={<Login />} />
                <Route path='/' element={
                    <PrivateRoute>
                        <App />
                    </PrivateRoute>
                }>
                    <Route path='/users' element={<Users />} />
                    <Route path='/posts' element={<Posts />} />
                    <Route path='/albums' element={<AlbumsWithHooks />} />
                </Route>
                <Route path='*' element={<Navigate to='/login' />} />
            </Routes>
        </Router>
    </Provider>
);