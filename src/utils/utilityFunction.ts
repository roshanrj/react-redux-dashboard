export const isMobileDevice = () => navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile|Windows Phone)/);

export const getObjectValue = (obj:any, keyPath: string) => {
    if (!obj || typeof obj !== 'object') {
        return '';
    }
    
    const keys = keyPath.split('.');

    let currObj = obj;
    for (let key of keys) {
        if (currObj[key] === undefined) {
            return undefined;
        }
        currObj = currObj[key];
    }
    return currObj;
}

export const IsValidJsonString = (str:string) => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
};

export const convertIntToRoman = (num: number) => {
   if (typeof num !== 'number' || num <= 0 || num > 3999) {
      return 'Invalid number';
   }

   const romanSymbols = [
      { value: 1000, symbol: 'M' },
      { value: 900, symbol: 'CM' },
      { value: 500, symbol: 'D' },
      { value: 400, symbol: 'CD' },
      { value: 100, symbol: 'C' },
      { value: 90, symbol: 'XC' },
      { value: 50, symbol: 'L' },
      { value: 40, symbol: 'XL' },
      { value: 10, symbol: 'X' },
      { value: 9, symbol: 'IX' },
      { value: 5, symbol: 'V' },
      { value: 4, symbol: 'IV' },
      { value: 1, symbol: 'I' }
   ];

   let romanNumber = '';

   for (let i = 0; i < romanSymbols.length; i++) {
      while (num >= romanSymbols[i].value) {
      romanNumber += romanSymbols[i].symbol;
      num -= romanSymbols[i].value;
      }
   }

   return romanNumber;
}