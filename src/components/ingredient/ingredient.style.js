export default {
  ingredient: {
    margin: '0.2rem',
    '& > div:first-child': {
      borderTopLeftRadius: '0.4rem',
      borderTopRightRadius: '0.4rem',
    },
    '& > div:last-child': {
      borderBottomLeftRadius: '0.4rem',
      borderBottomRightRadius: '0.4rem',
    },
  },
  top: {
    backgroundColor: '#eee',
    minHeight: '3rem',
    padding: '0.6rem',
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    flexGrow: '1',
    margin: '0 2rem',
  },
  button: {
    flexShrink: '0',
    width: '2rem',
    height: '2rem',
    margin: '0.2rem',
    backgroundColor: '#d61e17',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '0.2rem',
    alignItems: 'center',
  },
  bottom: {
    backgroundColor: '#fff',
    minHeight: '3rem',
    padding: '0.6rem',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  detail: {
    minWidth: '40%',
    flexGrow: '1',
    fontSize: '0.8rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '2rem',
  },
};
