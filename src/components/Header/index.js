import React from 'react';

import {View} from 'react-native';

import {withNavigation} from 'react-navigation';

import {
  Container,
  Header as HeaderNative,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
} from 'native-base';

// import { Container } from './styles';

const Header = ({hasGoBack}) => (
  <HeaderNative style={{backgroundColor: '#3e2723'}}>
    <Left>
      <Button transparent>
        {hasGoBack ? <Icon name="arrow-back" /> : null}
      </Button>
    </Left>
    <Body>
      <Title>MyCommerce</Title>
    </Body>
    <Right>
      <Button transparent>
        <Icon name="cart" />
      </Button>
    </Right>
  </HeaderNative>
);

Header.defaultProps = {
  hasGoBack: false,
};

export default Header;
// export default withNavigation(Header);
