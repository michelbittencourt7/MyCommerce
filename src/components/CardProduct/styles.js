import styled from 'styled-components/native';

export const Product = styled.View`
  width: 48%;
  margin-top: 20px;
  padding: 10px;
  background: white;
`;

export const Cover = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 180px;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  color: #555;
  font-size: 19;
  font-weight: bold;
`;

export const Brand = styled.Text`
  margin-bottom: 5px;
  color: #bbb;
  font-size: 13;
`;

export const Price = styled.Text`
  color: #37bea9;
  font-size: 15;
  font-weight: bold;
`;

export const Button = styled.Button.attrs({
  activeOpacity: 0.6,
})``;

export const AddCartButton = styled.TouchableOpacity``;
