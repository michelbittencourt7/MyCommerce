import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Product, Cover, Title, Brand, Price} from './styles';
import {Grid, Row, Col, Icon, Text, Button} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';

// import { Container } from './styles';

const getStars = stars => {
  let data = [];

  for (let i = 0; i < stars; i++) {
    data.push(<Icon name="star" style={styles.star}></Icon>);
  }

  return data;
};

export default function CardProduct({data, navigation}) {
  return (
    <Product>
      <TouchableOpacity
        onPress={() => navigation.navigate('Details', {product: data})}>
        <Cover source={{uri: data.image[0]}} />
        <Title>{data.name}</Title>
        <Brand>{data.brand}</Brand>
        <Price>{`$ ${data.price}`}</Price>

        {/* <Button rounded primary block style={styles.addCart}>
          <Text style={{color: 'white'}}>Comprar</Text>
        </Button>
       */}
        <View style={styles.stars}>{getStars(data.stars)}</View>
        <Text style={styles.rating}>(228 Avaliações)</Text>
      </TouchableOpacity>
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
