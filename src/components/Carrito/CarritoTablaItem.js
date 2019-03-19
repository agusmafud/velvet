import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ContadorProductosMini from './ContadorProductosMini';

const styles = theme => ({
  item:{
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 1,   
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing.unit * 3,
      paddingBottom: theme.spacing.unit * 2,   
    }, 
  },
  imagen: {
    width: 48, 
    height: 48,
    boxShadow: theme.shadows[1],
    marginRight: theme.spacing.unit,
    [theme.breakpoints.up('sm')]: {
      width: 80, 
      height: 80,
      marginRight: theme.spacing.unit * 2,
    },
  },
  titulo: {
    paddingLeft: theme.spacing.unit, 
    paddingRight: theme.spacing.unit * 2, 
    paddingTop: theme.spacing.unit * 2,
    fontSize: 17,
    [theme.breakpoints.up('sm')]: {
        fontSize: 19,
    },
  },
  paddingMobile: {
    paddingLeft: theme.spacing.unit, 
    paddingRight: theme.spacing.unit * 2,
  },
  botonQuitar: {
    marginLeft: theme.spacing.unit * 2,
  }
});


function CarritoTablaItem({ classes, item, onSumarUnidad, onRestarUnidad, onRemoverProducto }) {
  return (
    <Grid container className={classes.item} alignItems='center'>
      <Grid container item xs={8} sm={6} direction='row' alignItems='center'>            
        
        <Grid item>
          <img src={item.fotos[0].imgPath} alt={item.nombre} className={classes.imagen}/>            
        </Grid>

        <Grid item xs>
          <Typography variant="h6" align="left" component='h2' className={classes.titulo} color='primary' gutterBottom >                  
            {item.nombre}
          </Typography>
          <Hidden only={['xs', 'sm']}>
            <Typography variant="caption" align="left" component='h3' paragraph className={classes.paddingMobile} >                  
              {item.descripcionBreve}
            </Typography>
          </Hidden>
          <Hidden mdUp>
            <Typography variant="body2" align="left" paragraph className={classes.paddingMobile} color='textPrimary'>                  
              <b>
                { 
                  (item.cantidad === 1) ?
                    `$ ${item.precio}`
                  :
                    `$ ${item.precio} x ${item.cantidad}`
                }
              </b>                  
            </Typography>
          </Hidden>                            
        </Grid>
      </Grid>
          
      <Hidden only={['xs', 'sm']}>
        <Grid item xs style={{paddingBottom: 23}}>              
          <Typography variant="body2" align="right" color='textPrimary'>                                  
            <b>{`$ ${item.precio}`}</b>
          </Typography>
        </Grid>
      </Hidden>
          
      <Grid container direction='row' item xs>
        <Grid item xs={12}>
          <ContadorProductosMini 
            producto={item}
            unidades={item.cantidad}
            onSumarUnidad={onSumarUnidad} 
            onRestarUnidad={onRestarUnidad}                
          />            
        </Grid>
        
        <Grid item xs={12} style={{textAlign:'center'}}>            
          <Button 
              onClick={() => onRemoverProducto(item.id)}
              size='small' variant='outlined' color='secondary'
              style={{padding: 0, fontSize: 12}}
            >
            Quitar
          </Button>
        </Grid>
      </Grid>

      <Hidden only={['xs', 'sm']}>
        <Grid item xs style={{paddingBottom: 23}}>
          <Typography variant="subtitle1" align="left">                  
            <b>{`$ ${item.precio * item.cantidad}`}</b>
          </Typography>
        </Grid>
      </Hidden>

    </Grid>               
  );
}

CarritoTablaItem.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  onSumarUnidad: PropTypes.func.isRequired,
  onRestarUnidad: PropTypes.func.isRequired,
  onRemoverProducto: PropTypes.func.isRequired,
};

export default withStyles(styles)(CarritoTablaItem);