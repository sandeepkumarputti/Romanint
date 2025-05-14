function toRoman(num) {
    const val = [
      1000, 900, 500, 400,
      100, 90, 50, 40,
      10, 9, 5, 4,
      1
    ];
    const syb = [
      'M', 'CM', 'D', 'CD',
      'C', 'XC', 'L', 'XL',
      'X', 'IX', 'V', 'IV',
      'I'
    ];
    let romanNumeral = '';
    for (let i = 0; i < val.length; i++) {
      while (num >= val[i]) {
        romanNumeral += syb[i];
        num -= val[i];
      }
    }
    return romanNumeral;
  }
  