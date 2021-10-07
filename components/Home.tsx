import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  ListRenderItemInfo,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../assets/colors';
import categories, {ICategory} from '../assets/data/categories';
import populars from '../assets/data/popular';
import Fonts from '../assets/fonts';

import {RootStackParamList} from '../App';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  const renderCategoryItem = ({item, index}: ListRenderItemInfo<ICategory>) => {
    return (
      <View
        style={[
          styles.category__item__wrapper,
          {
            backgroundColor: item.selected ? colors.primary : colors.white,
            marginLeft: index !== 0 ? 0 : 20,
          },
        ]}>
        <Image source={item.image} style={styles.category__item__image} />
        <Text style={styles.category__item__title}>{item.title}</Text>
        <View
          style={[
            styles.category__item__select__wrapper,
            {
              backgroundColor: item.selected ? colors.white : colors.secondary,
            },
          ]}>
          <Feather
            name="chevron-right"
            size={8}
            style={styles.category__item__select__icon}
            color={item.selected ? colors.black : colors.white}
          />
        </View>
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
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <View style={styles.header__wrapper}>
            <Image
              source={require('../assets/images/profile.png')}
              style={styles.header__profile__image}
            />
            <Feather name="menu" size={24} color={colors.textDark} />
          </View>

          <View style={styles.title__wrapper}>
            <Text style={styles.subtitle}>Food</Text>
            <Text style={styles.title}>Delivery</Text>
          </View>

          <View style={styles.search__wrapper}>
            <Feather name="search" size={16} color={colors.textDark} />
            <View style={styles.search__control__wrapper}>
              <Text style={styles.search__text}>Search</Text>
            </View>
          </View>

          <View style={styles.categories__wrapper}>
            <Text style={styles.categories__title}>Categories</Text>
            <View style={styles.categories__list__wrapper}>
              <FlatList
                data={categories}
                renderItem={renderCategoryItem}
                keyExtractor={(category: ICategory) => category.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>

          <View style={styles.popular__wrapper}>
            <Text style={styles.popular__title}>Popular</Text>
            {populars.map((item, index) => (
              <TouchableOpacity
                key={item.id}
                activeOpacity={1}
                onPress={() =>
                  navigation.navigate('Details', {
                    item,
                  })
                }>
                <View
                  style={[
                    styles.popular__card__wrapper,
                    {
                      marginTop: index !== 0 ? 20 : 10,
                    },
                  ]}>
                  <View>
                    <View>
                      <View style={styles.popular__top__wrapper}>
                        <MaterialCommunityIcons
                          name="crown"
                          size={12}
                          color={colors.primary}
                        />
                        <Text style={styles.popular__top__text}>
                          top of the week
                        </Text>
                      </View>

                      <View style={styles.popular__card__title__wrapper}>
                        <Text style={styles.popular__card__title}>
                          {item.title}
                        </Text>
                        <Text style={styles.popular__card__weight}>
                          Weight {item.weight}
                        </Text>
                      </View>
                    </View>

                    <View style={styles.popular__card__bottom}>
                      <View style={styles.popular__add__pizza__button}>
                        <Feather
                          name="plus"
                          size={10}
                          color={colors.textDark}
                        />
                      </View>

                      <View style={styles.popular__rating__wrapper}>
                        <MaterialCommunityIcons
                          name="star"
                          size={10}
                          color={colors.textDark}
                        />
                        <Text style={styles.popular__rating}>
                          {item.rating}
                        </Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.popular__card__right}>
                    <Image
                      source={item.image}
                      style={styles.popular__card__image}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header__profile__image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  title__wrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: Fonts.MontserratBold,
    fontSize: 32,
    color: colors.textDark,
    marginTop: 5,
  },
  subtitle: {
    fontFamily: Fonts.MontserratRegular,
    fontSize: 16,
    color: colors.textDark,
  },
  search__wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  search__control__wrapper: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: colors.textLight,
    borderBottomWidth: 2,
  },
  search__text: {
    fontFamily: Fonts.MontserratSemiBold,
    fontSize: 14,
    marginBottom: 5,
    color: colors.textLight,
  },
  categories__wrapper: {
    marginTop: 30,
  },
  categories__title: {
    fontFamily: Fonts.MontserratBold,
    fontSize: 16,
    color: colors.textDark,
    paddingHorizontal: 20,
  },
  categories__list__wrapper: {
    paddingTop: 15,
    paddingBottom: 20,
  },
  category__item__wrapper: {
    backgroundColor: '#F5CA48',
    marginRight: 20,
    marginBottom: 10,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  category__item__image: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  category__item__title: {
    textAlign: 'center',
    fontFamily: Fonts.MontserratMedium,
    fontSize: 14,
    color: colors.textDark,
    marginTop: 10,
  },
  category__item__select__wrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 26,
    height: 26,
    borderRadius: 26,
    marginBottom: 20,
  },
  category__item__select__icon: {
    alignSelf: 'center',
  },
  popular__wrapper: {
    paddingHorizontal: 20,
  },
  popular__title: {
    fontFamily: Fonts.MontserratBold,
    fontSize: 16,
    color: colors.textDark,
  },
  popular__card__wrapper: {
    backgroundColor: colors.white,
    borderRadius: 25,
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    overflow: 'hidden',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  popular__top__wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  popular__top__text: {
    marginLeft: 10,
    fontFamily: Fonts.MontserratSemiBold,
    fontSize: 14,
    color: colors.textDark,
  },
  popular__card__title__wrapper: {
    marginTop: 20,
  },
  popular__card__title: {
    fontFamily: Fonts.MontserratSemiBold,
    fontSize: 14,
    color: colors.textDark,
  },
  popular__card__weight: {
    fontFamily: Fonts.MontserratMedium,
    fontSize: 12,
    color: colors.textLight,
    marginTop: 5,
  },
  popular__card__bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  popular__add__pizza__button: {
    backgroundColor: colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    marginLeft: -20,
  },
  popular__rating__wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  popular__rating: {
    fontFamily: Fonts.MontserratSemiBold,
    fontSize: 12,
    color: colors.textDark,
    marginLeft: 5,
  },
  popular__card__right: {
    marginLeft: 40,
  },
  popular__card__image: {
    width: 210,
    height: 125,
    resizeMode: 'contain',
  },
});

export default Home;
