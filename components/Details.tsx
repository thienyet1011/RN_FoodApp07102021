import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ListRenderItemInfo,
  ScrollView,
  Alert,
  StatusBar,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {RootStackParamList} from '../App';
import colors from '../assets/colors';
import {IIngredient} from '../assets/data/popular';
import Fonts from '../assets/fonts';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details = ({route, navigation}: DetailsProps) => {
  const {item} = route.params;

  const renderIngredientItem = ({
    item,
    index,
  }: ListRenderItemInfo<IIngredient>) => {
    return (
      <View
        style={[
          styles.ingredient__item__wrapper,
          {
            marginLeft: index !== 0 ? 0 : 20,
          },
        ]}>
        <Image source={item.image} style={styles.ingredient__item__image} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        animated={true}
        translucent={true}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <SafeAreaView>
          <View style={styles.header__wrapper}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.goBack()}>
              <View style={styles.header__left}>
                <Feather
                  name="chevron-left"
                  size={12}
                  color={colors.textDark}
                />
              </View>
            </TouchableOpacity>

            <View style={styles.header__right}>
              <MaterialCommunityIcons
                name="star"
                size={12}
                color={colors.white}
              />
            </View>
          </View>

          <View style={styles.title__wrapper}>
            <Text style={styles.title}>{item.title}</Text>
          </View>

          <View style={styles.price__wrapper}>
            <Text style={styles.price}>${item.price}</Text>
          </View>

          <View style={styles.info__wrapper}>
            <View style={styles.info__left__wrapper}>
              <View style={styles.info__item__wrapper}>
                <Text style={styles.info__item__title}>Size</Text>
                <Text style={styles.info__item__text}>
                  {item.sizeName} {item.sizeNumber}''
                </Text>
              </View>

              <View style={styles.info__item__wrapper}>
                <Text style={styles.info__item__title}>Crust</Text>
                <Text style={styles.info__item__text}>{item.crust}</Text>
              </View>

              <View style={styles.info__item__wrapper}>
                <Text style={styles.info__item__title}>Delivery in</Text>
                <Text style={styles.info__item__text}>
                  {item.deliveryTime} min
                </Text>
              </View>
            </View>

            <View>
              <Image source={item.image} style={styles.item__image} />
            </View>
          </View>

          <View style={styles.ingredients__wrapper}>
            <Text style={styles.ingredients__title}>Ingredients</Text>
            <View style={styles.ingredients__list__wrapper}>
              <FlatList
                data={item.ingredients}
                renderItem={renderIngredientItem}
                keyExtractor={(ingredient: IIngredient) => ingredient.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={() => Alert.alert('Your order has been placed')}>
            <View style={styles.order__wrapper}>
              <Text style={styles.order__text}>Place an order</Text>
              <Feather name="chevron-right" size={18} color={colors.black} />
            </View>
          </TouchableOpacity>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header__wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header__left: {
    borderColor: colors.textLight,
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
  },
  header__right: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 10,
    borderColor: colors.primary,
    borderWidth: 2,
  },
  title__wrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  title: {
    fontFamily: Fonts.MontserratBold,
    fontSize: 32,
    color: colors.textDark,
    width: '50%',
  },
  price__wrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  price: {
    color: colors.price,
    fontFamily: Fonts.MontserratBold,
    fontSize: 32,
  },
  info__wrapper: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info__left__wrapper: {
    paddingLeft: 20,
  },
  info__item__wrapper: {
    marginBottom: 20,
  },
  info__item__title: {
    fontFamily: Fonts.MontserratMedium,
    fontSize: 14,
    color: colors.textLight,
  },
  info__item__text: {
    fontFamily: Fonts.MontserratSemiBold,
    fontSize: 18,
    color: colors.textDark,
  },
  item__image: {
    resizeMode: 'contain',
    marginLeft: 50,
  },
  ingredients__wrapper: {
    marginTop: 40,
  },
  ingredients__title: {
    paddingHorizontal: 20,
    fontFamily: Fonts.MontserratSemiBold,
    fontSize: 16,
    color: colors.textDark,
  },
  ingredients__list__wrapper: {
    paddingVertical: 20,
  },
  ingredient__item__wrapper: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
    marginRight: 15,
    borderRadius: 15,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  ingredient__item__image: {
    resizeMode: 'contain',
  },
  order__wrapper: {
    marginVertical: 16,
    marginHorizontal: 20,
    backgroundColor: colors.primary,
    borderRadius: 50,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  order__text: {
    fontFamily: Fonts.MontserratBold,
    fontSize: 16,
    color: colors.black,
    marginRight: 10,
  },
});

export default Details;
