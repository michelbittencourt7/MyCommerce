import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Product, Cover, Title, Brand, Price} from './styles';
import {Grid, Row, Col, Icon, Text, Button} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';

// import { Container } from './styles';

export default function CardProduct({data, navigation}) {
  return (
    <Product>
      <Cover source={{uri: data.image}} />
      <Title>{data.name}</Title>
      <Brand>{data.brand}</Brand>
      <Price>{`$ ${data.price}`}</Price>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Button rounded primary block style={styles.addCart}>
          <Text style={{color: 'white'}}>Comprar</Text>
        </Button>
      </TouchableOpacity>
      <View style={styles.stars}>
        <Icon name="star" style={styles.star}></Icon>
        <Icon name="star" style={styles.star}></Icon>
        <Icon name="star" style={styles.star}></Icon>
        <Icon name="star" style={styles.star}></Icon>
        <Icon name="star" style={styles.star}></Icon>
      </View>
      <Text style={styles.rating}>(228 Avaliações)</Text>
    </Product>
  );
}

const styles = StyleSheet.create({
  addCart: {
    marginTop: 10,
    height: 35,
  },
  stars: {
    flex: 1,
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 3,
  },
  star: {
    flexWrap: 'nowrap',
    fontSize: 18,
    color: 'gold',
  },
  rating: {
    fontSize: 11,
    textAlign: 'center',
  },
});
