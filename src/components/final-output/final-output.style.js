export default {
  title: {
    fontSize: '1.2rem',
    flexShrink: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '2rem',
    marginTop: '0.6rem',
  },
  nutContainer: {
    flexShrink: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    flexDirection: 'column',
    margin: '0.4rem',
  
    '& > div': {
      padding: '0.2rem',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      borderBottom: '1px solid white',
      backgroundColor: '#ce851b',
  
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
      backgroundColor: '#555',
    },
  },
};
