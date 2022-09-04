//funny repetitive function that takes a string and reverse the letters within a given word. gets the job done.
function reverseWords(str) {
    return str.split('').reverse().join('').split(' ').reverse().join(' ')
  }

console.log(reverseWords('Never memorize something that you can look up.')) // => 'reveN eziromem gnihtemos taht uoy nac kool .pu'
console.log(reverseWords('The only truth is music.')) // => 'ehT ylno hturt si .cisum'
