import {ImageRequireSource} from 'react-native';

export interface ICategory {
  id: number;
  image: ImageRequireSource;
  title: string;
  selected: boolean;
}

const categories: ICategory[] = [
  {
    id: 1,
    image: require('../images/pizza-icon.png'),
    title: 'Pizza',
    selected: true,
  },
  {
    id: 2,
    image: require('../images/shrimp-icon.png'),
    title: 'Seafood',
    selected: false,
  },
  {
    id: 3,
    image: require('../images/soda-icon.png'),
    title: 'Soda Drinks',
    selected: false,
  },
  {
    id: 4,
    image: require('../images/pizza-icon.png'),
    title: 'Pizza',
    selected: false,
  },
  {
    id: 5,
    image: require('../images/shrimp-icon.png'),
    title: 'Seafood',
    selected: false,
  },
  {
    id: 6,
    image: require('../images/soda-icon.png'),
    title: 'Soda Drinks',
    selected: false,
  },
];

export default categories;
