import React from 'react';
import SplashScreen from 'react-native-splash-screen';

import AuthRoutes from './auth.routes';

import { useAuth } from '../hooks/auth';
import AppRoutes from './app.routes';

const Routes: React.FC = () => {
  const { user, loading } = useAuth();

  if (!loading) {
    SplashScreen.hide();
  }

  return user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
