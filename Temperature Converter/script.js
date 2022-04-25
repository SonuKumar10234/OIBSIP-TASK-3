const calculateTemp = () => {

    const numberTemp = document.getElementById('temp').value;  
    
    const tempSelected = document.getElementById('temp_option');
    const valueTemp = temp_option.options[tempSelected.selectedIndex].value;  
    
    const Celc_to_Fahren= (celc)=>{
        let fahrenheit =   (celc*9/5)+32   ;
        return fahrenheit;
        
    }

    const Fahren_to_Celc = (fahren)=>{
        let celcius =   (fahren -32)*5/9 ;
        return celcius;
    }

    let result;

    if(valueTemp == "celc"){

        result = Celc_to_Fahren(numberTemp);
        document.getElementById('resultContainer').innerHTML=`${result}°Fahrenheit`;

    }
    if(valueTemp=="fahren"){
        result = Fahren_to_Celc(numberTemp);
        document.getElementById('resultContainer').innerHTML=`${result}°Celcius`;

    }
  
}
