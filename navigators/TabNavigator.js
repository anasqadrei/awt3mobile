// @flow

import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { SimpleLineIcons } from '@expo/vector-icons';

import HomeNavigator from './HomeNavigator';
import BrowseNavigator from './BrowseNavigator.js';
import SearchNavigator from './SearchNavigator.js';
import LibraryNavigator from './LibraryNavigator.js';
import UserNavigator from './UserNavigator.js';

export default TabNavigator({
  Home: {
    screen: HomeNavigator,
  },
  Browse: {
    screen: BrowseNavigator,
  },
  Search: {
    screen: SearchNavigator,
  },
  Library: {
    screen: LibraryNavigator,
  },
  User: {
    screen: UserNavigator,
  },
}, {
  navigationOptions: ({ navigation }) => ({
    tabBarLabel: () => {
      const { routeName } = navigation.state;
      let label;
      switch (routeName) {
        case 'Home':
          label = 'أوتاريكا';
          break;
        case 'Browse':
          label = 'تصفح';
          break;
        case 'Search':
          label = 'بحث';
          break;
        case 'Library':
          label = 'المكتبة';
          break;
        case 'User':
          label = 'المستخدم';
          break;
      }
      return label;
    },
    tabBarIcon: ({ focused }) => {
      const { routeName } = navigation.state;
      let iconName;
      switch (routeName) {
        case 'Home':
          iconName = 'home';
          break;
        case 'Browse':
          iconName = 'disc';
          break;
        case 'Search':
          iconName = 'magnifier';
          break;
        case 'Library':
          iconName = 'playlist';
          break;
        case 'User':
          iconName = 'user';
          break;
      }
      return (<SimpleLineIcons name={iconName} size={22} color={focused ? '#2f95dc' : '#888'} />);
    }
  }),
  initialRouteName: 'Home',
  // order: ['User', 'Library', 'Search', 'Browse', 'Home'],
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    // activeTintColor: '#e91e63',
    // activeBackgroundColor: '#',
    // inactiveTintColor: '#',
    // inactiveBackgroundColor: '#',
    // style: {},
    // labelStyle: {},
    // tabStyle: {},
  },
});
