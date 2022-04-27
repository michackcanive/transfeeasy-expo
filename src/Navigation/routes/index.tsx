import React from 'react';
import { AuthRoutes } from '../routes/auth.routes';
import { AppRoutes } from '../routes/app.routes';
import { useAuth } from '../../contexts/auth';
import { StatusBar} from 'react-native';
import { theme } from '../../core/theme'
import Loading from '../../Components/Loanding';


const Routes: React.FC = () => {
  const { signed, loading } = useAuth();
  if (loading) {
    return (
      <>
        <StatusBar barStyle={'light-content'} backgroundColor={theme.colors.primary} />
        <Loading />
      </>
    );
  }
  return signed ? <AppRoutes /> : <AuthRoutes />;
}
export default Routes;