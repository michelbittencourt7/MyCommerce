import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #f5f5f5;
`;

export const ProductsList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingBottom: 30,
  },
  columnWrapperStyle: {
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
})``;

export const Category = styled.View`
  /* height: 30; */
  flex: 1;
  background-color: #fff;
`;

export const Categories = styled.View`
  text-align: center;
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;

export const CategorieName = styled.Text`
  font-size: 27;
  font-weight: 400;
  padding-top: 30;
  padding-bottom: 30;
`;

export const Filters = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
