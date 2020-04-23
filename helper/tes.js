function SupplySelect(){
    var selected = document.getElementById("SupplySelect")
    var choosed = selected.options[selected.selectedIndex].value
    return supply[selected].price 
}

module.exports = SupplySelect