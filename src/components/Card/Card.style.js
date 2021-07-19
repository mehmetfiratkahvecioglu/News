import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  cardBorder: {
    borderWidth: 2,
    borderColor: 'black',
    margin: 20,
    borderRadius: 12,
    backgroundColor: 'white',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    padding: 20,
    paddingBottom: 3,
  },
  cardCenter: {
    fontSize: 14,
    fontWeight: 'bold',
    padding: 20,
    paddingTop: 3,
  },

  button: {
    backgroundColor: 'deepskyblue',
    padding: 10,
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
});
