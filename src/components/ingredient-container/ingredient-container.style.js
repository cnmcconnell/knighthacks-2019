export default {
  ingredientContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexShrink: '1',
  },
  lower: {
    backgroundColor: '#ddd0bd',
    width: '100%',
  },
  submit: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '3rem',
    backgroundColor: '#05360c',
    color: '#fff',
    margin: '0.6rem',
    borderRadius: '0.4rem',
  },
  item: {
    margin: '0.4rem',
    padding: '0.2rem',
    minHeight: '1.2rem',
    fontSize: '0.8rem',
    borderRadius: '0.2rem',
    backgroundColor: '#eee',
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontSize: '1.2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '2rem',
    marginTop: '0.6rem',
  },
  nutContainer: {
    display: 'flex',
    margin: '0.4rem',
    color: '#fff',

    '& > div': {
      padding: '0.2rem',
      flexGrow: '1',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },

    '& > div:first-child': {
      borderTopLeftRadius: '0.2rem',
      borderBottomLeftRadius: '0.2rem',
    },

    '& > div:last-child': {
      borderTopRightRadius: '0.2rem',
      borderBottomRightRadius: '0.2rem',
    },
  },
  calories: {
    backgroundColor: '#0a0',
  },
  fat: {
    backgroundColor: '#aa0',
  },
  carbs: {
    backgroundColor: '#00a',
  },
  protein: {
    backgroundColor: '#a00',
  },
  tp: {
    backgroundColor: '#333',
    color: '#eee',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '2rem',
    margin: '0.2rem 0.6rem',
    borderRadius: '0.2rem',
  },
  nameBox: {
    display: 'flex',
  },
  nameBar: {
    flexGrow: '1',
    fontSize: '1.2rem',
    padding: '0.2rem',
    margin: '0.4rem',
  },
};
