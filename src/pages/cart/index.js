import React, {Component} from 'react';

import {View} from 'react-native';
import {
  Text,
  List,
  ListItem,
  Left,
  Thumbnail,
  Body,
  Right,
  Button,
  Icon,
  Container,
  Grid,
  Col,
} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

// import { Container } from './styles';

export default class Cart extends Component {
  state = {
    data: [],
    items: [],
    subtotal: 0,
    loadingData: false,
  };

  componentDidMount() {
    this.setState({loadingData: true});
    setTimeout(() => {
      this.renderList();
    }, 500);
  }

  async removeFromCart(index) {
    let data = [];
    let subtotal = 0;
    data = Object.assign(this.state.items);
    console.log(data);
    data = data.splice(0, index);
    console.log(data);
    data.forEach(
      item =>
        (subtotal =
          subtotal + (item.price - item.price * (item.discount / 100))),
    );
    await AsyncStorage.setItem('cart', JSON.stringify(data));
    this.renderList();
  }

  buyNow = async () => {
    await AsyncStorage.setItem('cart', JSON.stringify([]));
    this.renderList();
  };

  async renderList() {
    let data = [];
    let items = [];
    let valor = 0;
    this.setState({loadingData: true});

    items = JSON.parse(await AsyncStorage.getItem('cart'));

    items.forEach(
      item =>
        (valor = valor + (item.price - item.price * (item.discount / 100))),
    );

    data = items.map((item, index) => (
      <ListItem avatar>
        <Left>
          <Thumbnail
            source={{
              uri: item.image[0],
            }}
          />
        </Left>
        <Body>
          <Text>{item.name}</Text>
          <Text note>
            R$ {item.price} - {item.discount}% = R$
            {(item.price - item.price * (item.discount / 100)).toFixed(2)}
          </Text>
        </Body>
        <Right style={{justifyContent: 'center'}}>
          <Button danger small onPress={() => this.removeFromCart(index)}>
            <Icon name="trash" />
          </Button>
        </Right>
      </ListItem>
    ));

    this.setState({data, items, loadingData: false, subtotal: valor});
  }

  renderLoading() {
    return (
      <View
        style={{
          height: 500,
          marginTop: 50,
          justifyContent: 'center',
        }}>
        <Icon
          name="information-circle-outline"
          style={{
            color: '#ccc',
            fontSize: 100,
            marginLeft: 0,
            textAlign: 'center',
          }}
        />
        <Text
          style={{
            textAlign: 'center',
            fontSize: 30,
            color: '#ccc',
            marginTop: 20,
          }}>
          Aguarde, carregando dados
        </Text>
      </View>
    );
  }

  render() {
    const {data, loadingData, subtotal} = this.state;
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <List>{data}</List>
          {loadingData ? this.renderLoading() : null}
        </ScrollView>

        <View style={{height: 100}}>
          <Grid>
            <Col
              style={{
                backgroundColor: '#222',
                height: 400,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  height: 100,
                  paddingLeft: 20,
                }}>
                <Text note style={{color: 'white'}}>
                  Subtotal
                </Text>
                <Text style={{color: 'white', fontSize: 40}}>
                  R${subtotal.toFixed(2)}
                </Text>
              </View>
            </Col>
            <Col
              style={{
                height: 400,
                position: 'absolute',
                right: 0,
              }}>
              <Button
                success
                style={{
                  height: 100,
                  width: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon
                  name="checkmark"
                  onPress={this.buyNow}
                  style={{
                    color: 'white',
                    fontSize: 40,
                    marginLeft: 0,
                  }}
                />
              </Button>
            </Col>
          </Grid>
        </View>
      </SafeAreaView>
    );
  }
}

Cart.navigationOptions = {
  title: 'Carrinho',
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
