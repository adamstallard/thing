import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppsScreen from '@/components/Apps/AppsScreen';
import { headerOptions, NavHome } from './helpers';

const Stack = createStackNavigator();

const topOptions = {
  ...headerOptions,
  headerLeft: () => <NavHome />,
};

const Apps = () => (
  <Stack.Screen
    name="Apps"
    component={AppsScreen}
    initialParams={{
      baseUrl: '',
      context: '',
      contextId: '',
      params: {
        baseUrl: '',
        context: '',
        contextId: '',
      },
    }}
    options={topOptions}
  />
);

export default Apps;
