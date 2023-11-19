import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { selectIsRefreshing } from 'redux/auth/selectorsAuth';
import { refreshUser } from 'redux/auth/operationsAuth';
import { Layout } from './layout/Layout';
import { Loader } from './loader/Loader';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('./pages/Home/Home'));
const Login = lazy(() => import('./pages/Login/Login'));
const Register = lazy(() => import('./pages/Register/Register'));
const CalculatorPage = lazy(() =>
  import('./pages/UserPage/Calculator/CalculatorPage')
);
const DiaryPage = lazy(() => import('./pages/UserPage/Diary/DiaryPage'));
const AddDiary = lazy(() => import('./pages/UserPage/Diary/AddDiaryPage'));
const NotFound = lazy(() => import('./notFound/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/users" component={<Login />} />
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute redirectTo="/users" component={<Register />} />
              }
            />
            <Route
              path="/users/calculator"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<CalculatorPage />}
                />
              }
            />

            <Route
              path="/users"
              element={
                <PrivateRoute redirectTo="/login" component={<DiaryPage />} />
              }
            />
            <Route
              path="/users/add-diary"
              element={
                <PrivateRoute redirectTo="/login" component={<AddDiary />} />
              }
            />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      )}
      <ToastContainer
        font-size="15px"
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};
