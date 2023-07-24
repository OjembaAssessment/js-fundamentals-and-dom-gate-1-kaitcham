document.addEventListener('DOMContentLoaded', () => {
  const paragraph = document.querySelector('#myParagraph').textContent;
  const words = paragraph.split(' ');
  const occurrences = {};

  for (let word of words) {
    if (!occurrences[word.toLowerCase()]) {
      occurrences[word.toLowerCase()] = 1;
    } else {
      occurrences[word.toLowerCase()]++;
    }
  }

  const mostTwelveOftenWords = Object.fromEntries(
    Object.entries(occurrences)
      .sort((a, b) => b[1] - a[1])
      .slice(1, 13)
  );

  let newParagraph = '';

  Object.keys(mostTwelveOftenWords).forEach((word, index) => {
    newParagraph += `<span style="font-size: ${
      64 - index * 4
    }px">${word}</span> `;
  });

  document.querySelector('#myWordCloud').innerHTML = newParagraph;
});
