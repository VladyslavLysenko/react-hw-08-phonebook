// import { Form } from './Form';
// import { ContactsList } from './ContactsList';
// import Filter from './Filter';
import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from './redux/auth/operation';
import { useAuth } from '../hooks';
// !!!!!
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

// import { fetchContacts } from './redux/contacts/operations';
// import { getError, getIsLoading } from './redux/contacts/selectors';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const СontactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);
  const { isRefreshing } = useAuth();
  console.log('isRefreshing', isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<СontactsPage />} />
          }
        />
      </Route>
    </Routes>
  );

  // return (
  //   <>
  //     <Form />
  //     <Filter />
  //     {isLoading && !error && <b>Request in progress...</b>}
  //     <ContactsList />
  //   </>
  // );
};
