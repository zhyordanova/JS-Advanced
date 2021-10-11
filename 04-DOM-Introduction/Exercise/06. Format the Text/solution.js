function solve() {
  const text = document.getElementById('input').value;
  const sentences = text.split('.').filter(x => x !== '').map(x => x + '.');

  const paragraphRoof = Math.ceil(sentences.length / 3);

  let result = document.getElementById('output');

  for (let i = 0; i < paragraphRoof; i++) {
    result.innerHTML += `<p>${sentences.splice(0, 3).join('')}</p>`;
  }
}