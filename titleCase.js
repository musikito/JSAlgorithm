function titleCase(str) {
    //because some sentences come full uppercase
    //need to set them lowercase
      str = str.toLowerCase();
      //split the sentence @ empty spaces " "
      // put them in an array
      var splittedArray = str.split(" ");
  
     // console.log(splittedArray);
      
      //uppercase first word of array in a loop
      for(var i = 0; i<splittedArray.length; i++)
      {
        splittedArray[i] = splittedArray[i].charAt(0).toUpperCase() + splittedArray[i].slice(1);
        //console.log(splittedArray[i]);
      }//end for
      str = splittedArray.join(" ");
        return str;
      }
      
    console.log(titleCase("I'm a little tea pot"));
    console.log(titleCase("sHoRt AnD sToUt"));