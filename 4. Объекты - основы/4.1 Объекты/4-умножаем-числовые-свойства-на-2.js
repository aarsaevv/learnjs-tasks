const multiplyNumeric = (menu, number) => {
  for(let key in menu){
    if(Number.isFinite(menu[key])){
      menu[key] *= number
    }
  }
  return menu
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu, 2);