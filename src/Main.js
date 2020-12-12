import React from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';

const courses = [
  'MATH101',
  'NS101',
  'SPS101',
  'HIST191',
  'TLL101',
  'CIP101',
  'IF100',
];

const WIDTH = Dimensions.get('window').width;

const Main = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={courses}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={1}
            style={styles.course}
            onPress={() => navigation.navigate('Review', {course: item})}>
            <Text style={styles.courseText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(0,0,255,0.7)',
    alignItems: 'center',
    paddingTop: 20,
  },
  course: {
    width: WIDTH * 0.8,
    backgroundColor: 'darkblue',
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
    paddingVertical: 20,
  },
  courseText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default Main;
