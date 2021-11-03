const _ = {
  clamp: function (num, lower, upper) {
    let lowerClampVal = Math.max(num, lower);
    let clampVal = Math.min(lowerClampVal, upper);
    return clampVal; 
  },

  inRange: function (num, start, end) {
    if (end === undefined){
      end = start;
      start = 0;
    } else if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    } 
    const isInRange = (num >= start && num < end);
    return isInRange;
  },

  words (string) {
    let words = string.split(' ');
    return words;
  },

  pad (string, length){
    if (string.length >= length){
      return string;
    }
    
    const startPaddingLength = Math.floor((length - string.length) / 2);
    const endPaddingLength = length - string.length - startPaddingLength;

    let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
    return paddedString;

  },

  has (object, key){
    if (object[key] === undefined){
      return false;
    } else {
      return true;
    }
  },

  invert (object){
    let newObj = {

    };
    Object.entries(object).forEach(entry => {
      const [key, value] = entry;
      newObj[value] = key;
    });
    return newObj;
  },

  findKey (object, func){

    for(let key in object){
      const value = object[key];
      if(func(value) === true){
        return key;
      }
    }
    return undefined;
  },

  drop(arr, num){
    if (num === undefined){
      num = 1;
    }
    let newArr = arr.slice(num);
    return newArr;
  },

  dropWhile (array, predicate){
    let dropNum = array.findIndex((element, index) => {
      return !predicate(element, index, array);
    });
    
    let droppedArray = this.drop(array, dropNum);
    return droppedArray;
  },

  chunk (arr, size){
    if (size === undefined){
      size = 1;
    }
    let newArr = [];

    for (let i = 0; i < arr.length; i+=size){
      newArr.push(arr.slice(i, i+size));
    }

    return newArr;
  }

}


