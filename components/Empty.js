import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Empty() {
  return (
    <View style={styles.block}>
      <Text style={styles.description}>일이 없다~</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 24,
    color: '#9e9e9e',
  },
});
