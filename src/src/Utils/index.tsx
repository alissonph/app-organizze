export var floatToMoney = (number,decimal=2) =>{
    return number.toFixed(2).replace(".",",").replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}