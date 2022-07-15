import countries  from "i18n-iso-countries";

import esLocate from "i18n-iso-countries/langs/es.json"

countries.registerLocale(esLocate );

const countryObj = countries.getNames("es",{select:"official"});

const countryArr =Object.entries(countryObj).map(([key,value])=>{
    return{
        label:value,
        value: key
    };
});

export default countryArr;