import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { AcUnitSharp ,Block,Accessible,AccountTree,Payment,AddIcCall} from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import { FaBeer } from 'react-icons/fa';
import MenuItem from '@material-ui/core/MenuItem';
import Illustrati from '../images/Illustrati.png';
import Base from '../images/Base.png';
import DateFnsUtils from "@date-io/date-fns";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { green } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
const currencies = [
    {
      value: '1',
      label: 'DNI',
    },
    {
      value: '2',
      label: 'CEXT',
    },
    {
      value: '3',
      label: 'PPT',
    },
 
  ];

  const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
    root: {
     height:'650px',
     width:1350,
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
       

      backgroundImage: `url(${Base}) `,
      width: '700px',
      float:'left',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      borderBottomRightRadius:190,
      height:500,
      padding:0
    },
  

    content2: {
       float:'right',
       width: '500px',
       
      },
   
    playIcon: {
      height: 38,
      width: 38,
    },

    hletter1: {
        fontWeight:   1,  
         color:'white',
         marginTop:'70px',
         padding:'0px',
         marginLeft:  '-360px',
          fontStretch:  'normal',
          fontFamily:   'sans-serif',
          fontSize: '300%'
          
        
       },
       hletter2: {
        fontWeight: 600,  
         color:'white',
         marginTop:'-50px',
         padding:'0px',
         marginLeft:  '-450px',
          fontStretch:  'normal',
          fontFamily:   'sans-serif',
          fontSize: '300%'
          
            


        
       },

letterseguro:{

    fontSize: '200%',
marginTop:'-14px'

},
letterseguro2:{
    
    color:"blue"
    
},

letterseguro3:{

color:'CBC4C2',
marginTop:'-45px'

},
       textletter:{

        color:'white',
        marginLeft:  '60px',

        textAlign:'left',
        alignContent: 'flex-start',

        lineHeight: '250%',

       },
       lettersegurocheck:{

        width:'238px' ,
      
       },
       lettersegurocheckB:{
        width:'238px' ,
        marginTop:'-20px'
       },
       butttonAling:{
marginTop:'160px',
marginLeft:'-118px'

       },
       
       radiobutonn:{

        width: 19,height: 19, paddingTop: 0,paddingBottom: 0,

       }

  }));


function Iniciocons (){
    const [Rvalue, setRvalue] = React.useState('');
    const [R1value, setR1value] = React.useState('');
    const history = useHistory();

    const routeChange = () =>{ 
      let path = `/Cotiza`; 
      history.push(path);
    }

    const radiobuttonchange = (event) => {
        setRvalue(event.target.value);
      };
      const radiobuttonchange2 = (event) => {
        setR1value(event.target.value);
      };
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
     
      });
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleChangecheck = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    
    const handleDateChange = (date) => {
        setSelectedDate(date);
      };
    const [currency, setCurrency] = React.useState('1');
    const classes = useStyles();
    const theme = useTheme();
    const handleChange = (event) => {
        setCurrency(event.target.value);
      };



    return (
    
        <Card className={classes.root}>





        <div  >
          <CardContent className={classes.content}>
          
 

           
          
          
          
          </CardContent>
          <CardContent  className={classes.content2}>

          
         
          <div  Style="margin-left:-280px;margin-top:7px;" ><CheckCircleOutlineRoundedIcon Style="margin-left:-480px;" color="primary"/> <p Style="margin-left:120px;margin-top:-28px;"> Paso 1 de 7</p> </div>  




<p   className={classes.letterseguro}  >
Hola ,   <label className={classes.letterseguro2}  >Pepito </label>  

</p><br/>
<p   className={classes.letterseguro3}  >
Valida que los datos sean correctos
</p>


          <div>
        <TextField
          id="standard-select-currency"
          select
          label=" "
          value={currency}
          onChange={handleChange}
        
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField id="outlined-basic"     label=" Nro de Documento"   />
<br/>
        <TextField id="nombres"  Style ="width:238px"  label="Nombres" />
        <br/>
        <TextField id="Ap"  Style ="width:238px"  label="Apellido Paterno" />
        <br/>
        <TextField id="Am"  Style ="width:238px"  label="Apellido Materno" />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Fecha de Nacimiento"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />

</Grid>
    </MuiPickersUtilsProvider>

   
    <br/>

    <FormControl  Style="margin-left:-40px;margin-top:-15px"  component="fieldset">
      <FormLabel  Style="margin-left:-35px;margin-bottom:10px"  component="legend">Género</FormLabel>
      <RadioGroup    size="small"    aria-label="gender" name="genero" value={Rvalue} onChange={radiobuttonchange}>
        <FormControlLabel value="masculino" control={<Radio  className={classes.radiobutonn} size="small"    />} label="Masculino" />
        <FormControlLabel value="femenino" control={<Radio   className={classes.radiobutonn}   size="small"    />} label="Femenino" />
       </RadioGroup>
    </FormControl>

    <FormControl  Style="margin-left:-118px;margin-top:70px"  component="fieldset">
      <FormLabel  Style="margin-left:-5px;margin-bottom:10px"  component="legend">¿A quien vamos a Asegurar?</FormLabel>
      <RadioGroup    size="small"    aria-label="gender" name="asegurado" value={R1value} onChange={radiobuttonchange2}>
        <FormControlLabel value="a mi" control={<Radio  className={classes.radiobutonn} size="small"    />} label="Solo a mi" />
        <FormControlLabel value="a mi familia" control={<Radio   className={classes.radiobutonn}   size="small"    />} label="A mi y a mi familia" />
       </RadioGroup>
    </FormControl>
   
      
      <img  Style="position:absolute; top:0; left:504px;"  src={Illustrati} />
 

 

<Button   className={classes.butttonAling}   onClick={routeChange}   variant="contained" color="primary">
  Continuar
</Button>

</div>



 
          
          </CardContent>
        </div>
      
      </Card>
    
    
    
    
    
    
    
    
    
    
    
    )





}
  
export default Iniciocons;