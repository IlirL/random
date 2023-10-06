const largestString = (str) => {
  const a = str
    .split(" ")
    .map((s) => {
      if (s[s.length - 1] === ",") {
        return s.slice(0, -1);
      }
      return s;
    })
    .map((s) => ({ word: s, length: s.length }))

    .sort((a, b) => a.length - b.length);

  let largestLength = a[a.length - 1].length;

  return a
    .filter((e) => e.length === largestLength)
    .sort((a, b) => numberOfVowels(a) - numberOfVowels(b))
    .pop().word;
};

const numberOfVowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
};

console.log(
  largestString(
    "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers"
  )
);
