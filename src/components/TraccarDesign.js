import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import img from '../img/bg.png';
import spurtree from '../img/spurtree.png';
import Logo from '../img/Logo.png';
import HomeForm from './HomeForm';

const TraccarDesign = () => {
  return (
    <View>
      <ImageBackground
        source={img}
        resizeMode="cover"
        style={styles.homeBackground}>
        <View style={styles.card}>
          <Image style={styles.logoTracer} source={Logo} />
          <HomeForm />
        </View>
        <View style={styles.contentView}>
          <Text style={styles.textFont1}>Powered by : </Text>
          <Image source={spurtree} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  homeBackground: {
    backgroundColor: '#F6F7FB',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    width: '85%',
    height: 500,
    elevation: 5,
    borderTopWidth: 6,
    borderColor: '#5C67E5',
    position: 'relative',
    alignItems: 'center',
    marginTop: '20%',
  },
  contentView: {
    paddingLeft: 10,
    marginTop: '12%',
    flexDirection: 'row',
    width: '57%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textFont1: {
    fontFamily: 'inter',
    color: '#485359',
  },
  logoTracer: {
    top: '3%',
    width: '50%',
    resizeMode: 'contain',
  },
  logoSpurtree: {
    width: '30%',
    resizeMode: 'contain',
  },
});
export default TraccarDesign;
