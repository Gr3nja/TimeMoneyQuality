const toggles = {
  time:    document.getElementById('time'),
  money:   document.getElementById('money'),
  quality: document.getElementById('quality')
};

let onOrder = [];

function enforceMaxTwo(changedToggle) {
  const checked = Object.values(toggles).filter(t => t.checked);

  if (checked.length <= 2) {
    if (changedToggle.checked) {
      onOrder = onOrder.filter(id => id !== changedToggle.id);
      onOrder.push(changedToggle.id);
    } else {
      onOrder = onOrder.filter(id => id !== changedToggle.id);
    }
    return;
  }

  const oldestId = onOrder[0];
  if (oldestId && toggles[oldestId]) {
    toggles[oldestId].checked = false;
    onOrder.shift();
  }

  onOrder.push(changedToggle.id);
}

Object.values(toggles).forEach(toggle => {
  toggle.addEventListener('change', () => {
    enforceMaxTwo(toggle);
  });
});
