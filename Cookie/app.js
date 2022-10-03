function scookie(name,value,days){
    var expire=new Date();
    expire.setDate(expire.getDate()+days);
    document.cookie=name+'='+escape(value)+';expires='+expire.toGMTString();
  }
  scookie("test", 1, 7);