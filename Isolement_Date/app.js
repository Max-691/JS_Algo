function date (){
    let entry = prompt('enter date');
    if (entry.length === 10) {
      console.log(entry.split('/'));
      const day = entry.substring(0, 2);
      const month = entry.substring(3, 5);
      const year = entry.substring(6, 10);
      console.log(year);
      alert("jour = " + day + " \n mois = " + month + " \n année = " + year)
    }
  }
  date()