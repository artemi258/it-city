const ruKeys: Record<string, string> = {
 а: 'a',
 б: 'b',
 в: 'v',
 г: 'g',
 д: 'd',
 е: 'e',
 ё: 'e',
 ж: 'j',
 з: 'z',
 и: 'i',
 й: 'y',
 к: 'k',
 л: 'l',
 м: 'm',
 н: 'n',
 о: 'o',
 п: 'p',
 р: 'r',
 с: 's',
 т: 't',
 у: 'u',
 ф: 'f',
 х: 'h',
 ц: 'c',
 ч: 'ch',
 ш: 'sh',
 щ: 'shch',
 ы: 'y',
 э: 'e',
 ю: 'u',
 я: 'ya',
};

export const ruToLatin = (word: string): string => {
 return word
  .split('')
  .map((letter) => {
   const lowLetter = letter.toLowerCase();
   const en = (ruKeys[lowLetter] ?? letter).replace(/[ъь' ']+/g, (l) => {
    return l === ' ' ? '_' : '';
   });
   return en;
  })
  .join('');
};
