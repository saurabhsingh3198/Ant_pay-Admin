import { Calendar } from 'antd';
import DefaultLayout from './layout/DefaultLayout';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Tables from './pages/Tables';
import Settings from './pages/Settings';
import Chart from './pages/Chart';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import ECommerce from './pages/Dashboard/ECommerce';
import { Navigate } from 'react-router-dom';

const isAuthenticated = (): boolean => {
  return !!localStorage.getItem('email');
};

const routes = [
  {
    path: '/auth/signin',
    element: <SignIn />,
  },
  {
    path: '/auth/signup',
    element: <SignUp />,
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
  {
    path: '/',
    element: isAuthenticated() ? (
      <DefaultLayout />
    ) : (
      <Navigate to="/auth/signin" replace />
    ),
    children: [
      {
        index: true,
        element: <ECommerce />,
      },
      {
        path: '/calendar',
        element: <Calendar />,
      },
      {
        path: '/forms/form-elements',
        element: <FormElements />,
      },
      {
        path: '/transection/form-elements',
        element: <FormElements />,
      },
      {
        path: '/transection/form-layout',
        element: <FormLayout />,
      },
      {
        path: '/forms/form-layout',
        element: <FormLayout />,
      },
      {
        path: '/service-master/sub-category',
        element: <Tables />,
      },
      {
        path: '/profile',
        element: <Settings />,
      },
      {
        path: '/chart',
        element: <Chart />,
      },
      {
        path: '/ui/alerts',
        element: <Alerts />,
      },
      {
        path: '/ui/buttons',
        element: <Buttons />,
      },
    ],
  },
];

export default routes;
