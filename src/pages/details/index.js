import React, {Component} from 'react';
import {Alert, Dimensions, StyleSheet, View, Text, Button} from 'react-native';
import {
  Button as ButtonNB,
  Text as TextNB,
  List,
  ListItem,
  Left,
  Thumbnail,
  Body,
  Right,
  Toast,
  Icon,
} from 'native-base';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {Container} from '../main/styles';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {
  Title,
  Description,
  Price,
  DescriptionPanel,
  DescriptionTitle,
  Discount,
  PriceWDiscount,
  Divider,
  RatingPanel,
  RatingTitle,
} from './styles';
import AsyncStorage from '@react-native-community/async-storage';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

// import { Container } from './styles';

const entries = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/UYiroysl.jpg',
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
  {
    title: 'Middle Earth, Germany',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/lceHsT6l.jpg',
  },
];

const _renderItem = ({item, index}, parallaxProps) => {
  return (
    <View
      style={{
        width: screenWidth - 60,
        height: screenWidth - 150,
      }}>
      <ParallaxImage
        source={{uri: item}}
        containerStyle={{
          flex: 1,
          marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
          marginTop: 30,
          backgroundColor: 'white',
          borderRadius: 4,
        }}
        style={{resizeMode: 'contain'}}
        parallaxFactor={0.4}
        {...parallaxProps}
      />
    </View>
  );
};

const addToCart = (product, navigation) => {
  Alert.alert(
    'Adicionar produto ao carrinho',
    'Deseja mesmo adicionar este produto ao carrinho?',
    [
      {
        text: 'Não',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: async () => {
          let cart = [];
          cart = JSON.parse(await AsyncStorage.getItem('cart'));
          cart.push(product);
          await AsyncStorage.setItem('cart', JSON.stringify(cart));
          navigation.pop();
        },
      },
    ],
    {cancelable: false},
  );
};

export default function Details({navigation}) {
  let product = navigation.getParam('product');

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Carousel
          sliderWidth={screenWidth}
          sliderHeight={screenWidth}
          itemWidth={screenWidth - 60}
          data={product.image}
          renderItem={_renderItem}
          hasParallaxImages={true}
        />
        <View style={styles.productInfo}>
          <Title>{product.name}</Title>
          <Price>R$ {product.price}</Price>
          <PriceWDiscount>
            R${' '}
            {(product.price - product.price * (product.discount / 100)).toFixed(
              2,
            )}{' '}
            <Discount>(10% de desconto)</Discount>
          </PriceWDiscount>
          <ButtonNB
            block
            success
            style={styles.buyButton}
            onPress={() => addToCart(product, navigation)}>
            <TextNB style={{color: 'white'}}>Comprar</TextNB>
          </ButtonNB>
          <TouchableOpacity>
            <ButtonNB
              block
              bordered
              danger
              style={styles.addButton}
              onPress={() => addToCart(product, navigation)}>
              >
              <TextNB style={styles.addButtonText}>
                Adicionar ao carrinho
              </TextNB>
            </ButtonNB>
          </TouchableOpacity>
        </View>
        <Divider />
        <DescriptionPanel>
          <DescriptionTitle>Descrição</DescriptionTitle>
          <Description>{product.description}</Description>
        </DescriptionPanel>
        <Divider />
        <RatingPanel>
          <RatingTitle>Avaliações</RatingTitle>
          {product.ratings.length > 0 ? (
            <List>
              {product.ratings.map(item => (
                <ListItem avatar>
                  <Left>
                    <Thumbnail
                      source={{
                        uri:
                          'https://images.vexels.com/media/users/3/129733/isolated/preview/a558682b158debb6d6f49d07d854f99f-silhueta-de-avatar-masculino-casual-by-vexels.png',
                      }}
                    />
                  </Left>
                  <Body>
                    <Text>{item.name}</Text>
                    <Text note>{item.comment}</Text>
                  </Body>
                  <Right>
                    <Text>
                      {item.rate} <Icon name="star" style={styles.rating} />
                    </Text>
                  </Right>
                </ListItem>
              ))}
            </List>
          ) : (
            <View>
              <Text
                style={{
                  paddingTop: 10,
                  paddingBottom: 10,
                  color: '#808080',
                  fontSize: 17,
                }}>
                Sem avaliações ainda
              </Text>
            </View>
          )}
        </RatingPanel>
        <Divider />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
    height: screenHeight - 80,
  },

  productInfo: {
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 20,
  },

  buyButton: {
    marginTop: 20,
  },
  addButton: {
    marginTop: 10,
  },
  addButtonText: {
    color: '#f4511e',
  },
  rating: {
    fontSize: 14,
    color: 'gold',
  },
});

Details.navigationOptions = {
  title: 'Detalhes do Produto',
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
