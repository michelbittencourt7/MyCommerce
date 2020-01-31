import React from 'react';
import {View} from 'react-native';
import {StatusBar} from 'react-native';
import Routes from './routes';
import {loadData} from '../utils/data';
// import { Container } from './styles';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#f4511e" />
      <Routes />
    </>
  );
}
