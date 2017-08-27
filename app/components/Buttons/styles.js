import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: '$primaryBlue',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 19,
    margin: 11,
  },
  text: {
    color: '$white',
    fontSize: 14,
    fontWeight: '300',
    paddingVertical: 20,
  },
});
