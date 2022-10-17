import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    card: {
        borderRadius: '15px',
        height: '100%',
        width: '500px',
        position: 'relative',
        display: 'inline-block',
        justifyContent: 'space-between',
      },
      alignItems: {
        display: 'flex',
        alignItems: 'center',
    justifyContent: 'center',
      },
      media: {
        height: 250,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
      },
      header: {
        position: "absolute",
         color: "white",
         top: "100px",
         left: "50%",
         transform: "translateX(-50%)",
      },

}));
