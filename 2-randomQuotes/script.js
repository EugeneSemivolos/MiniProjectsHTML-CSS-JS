function generade() {
  const quotes = {
  	'Наполеон Хилл' : 'Что разум человека может постигнуть и во что он может поверить, того он способен достичь',
    'Альберт Эйнштейн' : 'Стремитесь не к успеху, а к ценностям, которые он дает',
    'Флоренс Найтингейл' : 'Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других.',
    'Амелия Эрхарт' : 'Сложнее всего начать действовать, все остальное зависит только от упорства.',
    'Федор Достоевский' : 'Надо любить жизнь больше, чем смысл жизни.',
    'Джон Леннон' : 'Жизнь - это то, что с тобой происходит, пока ты строишь планы.', 
  }
  const authors = Object.keys(quotes);

  const random_index = Math.floor(Math.random()*authors.length);
  const author = authors[random_index];

  const quote = quotes[author];

  document.getElementById('quote').innerHTML = quote;
  document.getElementById('author').innerHTML = author;
}