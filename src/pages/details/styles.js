import styled from 'styled-components/native';

export const Title = styled.Text`
  font-weight: 700;
  color: #012;
  font-size: 21;
  text-align: center;
`;

export const Price = styled.Text`
  font-weight: 400;
  color: #808080;
  font-size: 16;
  padding-top: 10;
  text-decoration-line: line-through;
  text-decoration-style: solid;
  text-align: center;
`;

export const Discount = styled.Text`
  font-size: 12;
  color: green;
`;

export const PriceWDiscount = styled.Text`
  font-weight: 700;
  color: #012;
  font-size: 27;
  text-align: center;
`;

export const Divider = styled.View`
  height: 10;
  flex: 1;
  background-color: #e7e7e7;
  margin-top: 20;
`;

export const DescriptionPanel = styled.View`
  padding-left: 15;
  padding-right: 15;
  margin-top: 20;
`;

export const DescriptionTitle = styled.Text`
  border-bottom-color: #f4511e;
  border-bottom-width: 2;
  padding-top: 5;
  padding-bottom: 3;
  font-size: 16;
`;

export const Description = styled.Text`
  padding-top: 10;
  font-weight: 500;
  color: #808080;
  font-size: 14;
`;

export const RatingPanel = styled.View`
  padding-left: 15;
  padding-right: 15;
  margin-top: 20;
`;

export const RatingTitle = styled.Text`
  border-bottom-color: #f4511e;
  border-bottom-width: 2;
  padding-top: 5;
  padding-bottom: 3;
  font-size: 16;
`;
