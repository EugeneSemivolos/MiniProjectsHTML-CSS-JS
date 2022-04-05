const container2 = document.getElementsByClassName('container2')[0];
const container3 = document.getElementsByClassName('container3')[0];
const checkIcon = document.getElementById('check-icon');
const xIcon = document.getElementById('x-icon');

xIcon.addEventListener('click', () => {
  typeNote();
});

checkIcon.addEventListener('click', () => {
  createNote();
});

const typeNote = () => {
  if(container3.style.display === 'none')
    container3.style.display = 'block';
  else
    container3.style.display = 'none';
};

const createNote = () => {
  const noteText = document.getElementById('note-text').value;
  const node0 = document.createElement('div');
  const node1 = document.createElement('h1');

  node1.innerHTML = noteText;

  node1.className = 'node1';
  node1.style.margin = margin();
  node1.style.transform = rotate();
  node1.style.background = color();

  node0.appendChild(node1);

  container2.insertAdjacentElement('beforeend', node0);

  node0.addEventListener('mouseenter', () => {
    node0.style.transform = 'scale(1.1)';
  });
  node0.addEventListener('mouseleave', () => {
    node0.style.transform = 'scale(1)';
  });

  node0.addEventListener('dblclick', () => {
    node0.remove();
  });

  document.getElementById('note-text').value = '';
}

const margin = () => {
  const RANDOM_MARGIN = ['-5px','1px','5px','10px','15px','20px'];
  return RANDOM_MARGIN[random(RANDOM_MARGIN.length)];
};

const rotate = () => {
  const RANDOM_ROTATE = [
    'rotate(5deg)',
    'rotate(3deg)',
    'rotate(2deg)',
    'rotate(-2deg)',
    'rotate(-3deg)',
    'rotate(-5deg)'
  ];
  return RANDOM_ROTATE[random(RANDOM_ROTATE.length)];
};

const color = () => {
  const RANDOM_COLOR = [
    '#c2ff3d',
    '#ff3de8',
    '#3dc2ff',
    '#04e022',
    '#bc83e6',
    '#ebb328'
  ];
  return RANDOM_COLOR[random(RANDOM_COLOR.length)];
};

const random = (n) => Math.floor(Math.random() * n);