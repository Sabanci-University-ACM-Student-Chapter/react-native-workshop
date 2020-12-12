import {Dimensions, StyleSheet} from 'react-native';

const WIDTH = Dimensions.get('window').width;
// const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: 'rgba(0,0,255,0.7)',
  },
  cardContainer: {
    width: 0.8 * WIDTH,
    borderRadius: 5,
    backgroundColor: 'darkblue',
    marginBottom: 20,
    alignItems: 'center',
    paddingVertical: 20,
  },
  cardText: {
    color: '#FFF',
    fontSize: 14,
  },
  courseContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#FFF',
  },
  reviewsContainer: {
    width: 0.8 * WIDTH,
  },
  addReviewContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    backgroundColor: '#FAFAFA',
    marginBottom: 20,
    alignItems: 'center',
    paddingVertical: 20,
  },
  addReviewText: {
    color: '#000',
    fontSize: 14,
  },
  reviewInputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  reviewInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    fontSize: 14,
    padding: 5,
    marginBottom: 5,
  },
  addButton: {
    width: '40%',
    backgroundColor: 'darkblue',
    borderRadius: 5,
    alignItems: 'center',
    paddingVertical: 5,
  },
  addText: {
    color: '#FFF',
    fontSize: 14,
  },
  reviewContainer: {
    width: '100%',
    backgroundColor: '#FAFAFA',
    marginBottom: 10,
    padding: 5,
  },
  reviewText: {
    color: '#000',
    fontSize: 14,
  },
});

export default styles;
