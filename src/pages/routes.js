import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import main from './main';
import Details from './details';
import Cart from './cart';

export default createAppContainer(
  createSwitchNavigator({
    App: createStackNavigator({
      main,
      Cart,
      Details,
    }),
  }),
);
