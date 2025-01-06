function toggleText(div) {
    if (div.classList.contains('invisible')) {
      div.classList.remove('invisible');
    } else {
      div.classList.add('invisible');
    }
  }

  // Show all text of a specific type
  function showAll(type) {
    const elements = document.querySelectorAll(`.${type}`);
    elements.forEach(element => {
      element.classList.remove('invisible');
    });
  }

  // Hide all text of a specific type
  function hideAll(type) {
    const elements = document.querySelectorAll(`.${type}`);
    elements.forEach(element => {
      element.classList.add('invisible');
    });
  }

  // Adjust text size based on slider value
  function adjustTextSize(type, size) {
    const elements = document.querySelectorAll(`.${type}`);
    elements.forEach(element => {
      element.style.fontSize = `${size}px`;
    });
  }