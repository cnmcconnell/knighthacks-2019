export default {
  navigation: {
    display: 'flex',
    flexShrink: '0',
    height: '3rem',
    backgroundColor: '#d61e17',
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
  },
  btn: {
    display: 'flex',
    flexGrow: '1',
    alignItems: 'center',
    justifyContent: 'center',

    '& > img': {
      height: '2rem',
      width: '2rem',
    },
  },
};
