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

  const mostFiveOftenWords = Object.fromEntries(
    Object.entries(occurrences)
      .sort((a, b) => b[1] - a[1])
      .slice(1, 6)
  );

  let newParagraph = '';

  for (let word of words) {
    if (mostFiveOftenWords[word.toLowerCase()]) {
      !word.startsWith(word.charAt(0).toUpperCase())
        ? (newParagraph += `<span style="background-color: yellow">${word}</span> `)
        : (newParagraph += `<span style="background-color: yellow; text-decoration: underline">${word}</span> `);
    } else {
      newParagraph += `${word} `;
    }
  }

  document.querySelector('#myParagraph').innerHTML = newParagraph;
});
