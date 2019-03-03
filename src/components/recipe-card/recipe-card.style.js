export default {
  recipeCard: {
    display: 'flex',
    borderBottom: '1px solid #CF9649',
    backgroundColor: '#F9B559',
    flexShrink: '0',

    '& h3': {
      color: '#333',
    },
  },
  items: {
    margin: '1rem',
  },
  image: {
    border: '3px solid #05360cab',
    borderRadius: '6px',
    width: '140px',
    height: '140px',
  },
  description: {
    padding: '1rem 1rem 1rem 0',
    flexGrow: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: '1rem',
    flexShrink: '0',

    '& > h3': {
      flexGrow: '1',
    },

    '& > div': {
      marginRight: '0.4rem',
    },
  },
  price: {

  },
  heart: {
    height: '2rem',
    display: 'flex',
    alignSelf: 'center',
  },
  nutContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    flexDirection: 'column',
    margin: '0.2rem',

    '& > div': {
      padding: '0.2rem',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      borderBottom: '1px solid white',

      '& > div:first-child': {
        flexGrow: '1',
      },
    },

    '& > div:first-child': {
      borderTopLeftRadius: '0.2rem',
      borderTopRightRadius: '0.2rem',
    },

    '& > div:last-child': {
      borderBottomLeftRadius: '0.2rem',
      borderBottomRightRadius: '0.2rem',
      borderBottom: 'none',
    },
  },

  calories: {
    backgroundColor: '#ce851b',
  },
  fat: {
    backgroundColor: '#ce851b',
  },
  carbs: {
    backgroundColor: '#ce851b',
  },
  protein: {
    backgroundColor: '#ce851b',
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
};
