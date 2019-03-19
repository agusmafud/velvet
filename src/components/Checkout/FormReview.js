import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = theme => ({
  listItem: {
    padding: `${theme.spacing.unit}px 0`,
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing.unit * 2,
  },  
  progress: {
   
  }
});

const rangoHora = value => { 
  switch (value) {
    case '1': return '8:00 a 12:00hs'
    case '2': return '12:00 a 16:00hs'
    case '3': return '16:00 a 20:00hs'
    default: return ''      
  }
}

function FormReview(props) {
  const { classes, values, carrito, montoCarrito, unidadesCarrito, fechaEntrega } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Resumen del Pedido
      </Typography>
      {
          carrito &&
          <React.Fragment>
            <List disablePadding>        
              {carrito.map(item => (
                <ListItem className={classes.listItem} key={item.id}>
                  <ListItemText
                    primary={item.nombre} 
                    secondary=
                      {
                        item.cantidad > 1 ? 
                        `${item.cantidad} unidades de $${item.precio} cada una` 
                      : 
                        `${item.cantidad} unidad de $${item.precio}`
                      }                
                  />
                  <Typography variant="body2">{`$${item.cantidad*item.precio}`}</Typography>
                </ListItem>
              ))}
              <ListItem className={classes.listItem}>
                <ListItemText 
                  primary="Total" 
                  secondary={
                    (unidadesCarrito === 1) ? 
                      `${unidadesCarrito} unidad`
                    :
                      `${unidadesCarrito} unidades`
                  }
                />
                <Typography variant="subtitle1" className={classes.total}>
                  {`$${montoCarrito}`}
                </Typography>
              </ListItem>
            </List>
            <Grid container spacing={16}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom className={classes.title}>
                  Tus datos
                </Typography>
                <Typography gutterBottom>{values.name}</Typography>
                <Typography gutterBottom>{values.email}</Typography>
                <Typography gutterBottom>{values.tel}</Typography>
              </Grid>
              <Grid item container direction="column" xs={12} sm={6}>
                <Typography variant="h6" gutterBottom className={classes.title}>
                  Día y lugar de entrega
                </Typography>
                <Grid container>
                    <Grid item xs={6}>
                      <Typography gutterBottom>Dia de entrega</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography gutterBottom>{fechaEntrega}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography gutterBottom>Hora de entrega</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography gutterBottom>{rangoHora(values.entregaHora)}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography gutterBottom>Dirección de entrega</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography gutterBottom>{values.entregaDireccion}</Typography>
                    </Grid>                    
                    {
                      values.entregaReceptor &&
                      <React.Fragment>
                        <Grid item xs={6}>
                          <Typography gutterBottom>Persona que lo recibe</Typography>
                        </Grid>                    
                        <Grid item xs={6}>
                          <Typography gutterBottom>{values.entregaReceptor}</Typography>
                        </Grid>
                      </React.Fragment>
                    }                                                  
                </Grid>
              </Grid>
            </Grid>
          </React.Fragment>
      }

      { !carrito &&
        <div style={{height: '650px'}}>
          <LinearProgress className={classes.progress} />
        </div>
      }

      
    </React.Fragment>
  );
}

FormReview.propTypes = {
  classes: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  carrito: PropTypes.array,
  montoCarrito: PropTypes.number,
  unidadesCarrito: PropTypes.number,
  fechaEntrega: PropTypes.string,
};

export default withStyles(styles)(FormReview);