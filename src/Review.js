import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import {FlatList} from 'react-native-gesture-handler';
import fb from './fb.config';

const db = fb.database();

const Review = ({route, navigation}) => {
  const {course} = route.params;

  const [reviews, setReviews] = useState(null);
  const [isReviewing, setIsReviewing] = useState(false);
  const [myReview, setMyReview] = useState('');

  React.useLayoutEffect(() => navigation.setOptions({title: course}), [
    navigation,
    course,
  ]);

  useEffect(() => {
    // AsyncStorage.getItem(course)
    //   .then((value) => {
    //     if (value === null) {
    //       setReviews([]);
    //     } else {
    //       setReviews(JSON.parse(value));
    //     }
    //   })
    //   .catch((error) => console.log(error));
    db.ref('/' + course).on('value', (snapshot) => {
      const myVal = snapshot.val();
      if (myVal === null) {
        setReviews([]);
      } else {
        setReviews(myVal);
      }
    });
  }, [course]);

  useEffect(() => {
    if (!isReviewing && myReview !== '') {
      setReviews([...reviews, myReview]);
      // AsyncStorage.setItem(
      //   course,
      //   JSON.stringify([...reviews, myReview]),
      // ).catch((error) => console.log(error));
      db.ref('/' + course)
        .set([...reviews, myReview])
        .catch((error) => console.log(error));
    }
    setMyReview('');
  }, [isReviewing]);

  const addReview = () => {
    setIsReviewing(false);
  };

  return (
    <View style={styles.courseContainer}>
      {reviews === null ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.reviewsContainer}>
          {!isReviewing ? (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.addReviewContainer}
              onPress={() => setIsReviewing(true)}>
              <Text style={styles.addReviewText}>Add a review</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.reviewInputContainer}>
              <TextInput
                style={styles.reviewInput}
                value={myReview}
                onChangeText={setMyReview}
                multiline={true}
                numberOfLines={4}
                placeholder="Enter a review..."
              />
              <TouchableOpacity
                activeOpacity={1}
                style={styles.addButton}
                onPress={addReview}>
                <Text style={styles.addText}>
                  {myReview === '' ? 'Cancel' : 'Add review'}
                </Text>
              </TouchableOpacity>
            </View>
          )}
          <FlatList
            data={reviews}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View style={styles.reviewContainer}>
                <Text style={styles.reviewText}>{item}</Text>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default Review;
