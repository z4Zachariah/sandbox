import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        background: 'transparent',
         boxShadow: 'none',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
        },
    },
    toolbar: {
        display: 'flex',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
          width: 'auto',
        },
      },

    title:{
        color: '#ebbc88',
    },
    arrow: {
        position: 'absolute',
        fontSize: 100,
        color: '#cc5577',
        left: '100%',
    },


}));
