const editor = CodeMirror.fromTextArea(document.getElementById('htmlInput'), {
  mode: 'xml',
  lineNumbers: true,
  theme: 'default',
});

document.addEventListener('DOMContentLoaded', () => {
  const customElement = document.getElementById('custom-element');
  const links = document.querySelectorAll('aside li');
  links.forEach(link =>
    link.addEventListener('click', () => {
      const target = link.querySelector('a').getAttribute('href');
      const targetElement = document.querySelector(target);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    })
  )
  
  function getValueSlider(slider){
    const value = slider.value;
    const displayValue = slider.parentElement.querySelector('.display-value');
    displayValue.textContent = value;
    if(slider.id === 'font-size-slider') {
      customElement.style.fontSize = `${value}px`;
    }
    if(slider.id === 'padding-slider') {
      customElement.style.padding = `${value}px`;
    }
    if(slider.id === 'margin-slider') {
      customElement.style.margin = `${value}px`;
    }
    if(slider.id === 'border-radius-slider') {
      customElement.style.borderRadius = `${value}px`;
    }
    if(slider.id === 'font-weight-slider') {
      customElement.style.fontWeight = `${value}`;
    }
    if(slider.id === 'letter-spacing-slider') {
      customElement.style.letterSpacing = `${value}px`;
    }
    if(slider.id === 'line-height-slider') {
      customElement.style.lineHeight = `${value}`;
    }
    if(slider.id === 'word-spacing-slider') {
      customElement.style.wordSpacing = `${value}px`;
    }
    if(slider.id === 'border-width-slider') {
      customElement.style.borderWidth = `${value}px`;
    }
  }
  const slider = document.querySelectorAll('.custom-slider input');
  slider.forEach(slider => {
    getValueSlider(slider);

    slider.addEventListener('input', () => {
      getValueSlider(slider);
    });
  });
  function getValueSelector(selector){
    const value = selector.value;
    //const displayValue = selector.parentElement.querySelector('.display-value');
    //displayValue.textContent = value;
    if(selector.id === 'font-family-selector') {
      customElement.style.fontFamily = `${value}`;
    }
  }
  const selector = document.querySelectorAll('.custom-selector select');
  selector.forEach(selector => {
    selector.addEventListener('change', () => {
      getValueSelector(selector);
    });
  });
  const colorPicker = document.getElementById('text-color-picker');
  colorPicker.addEventListener('change', () => {
    textColor = colorPicker.value;
    texts = customElement.getElementsByTagName('p');
    for(let i = 0; i < texts.length; i++){
      texts[i].style.color = textColor;
    }
  });

  const flexItemsDemo = document.getElementById('flex-items-demo');

  function renderFlexItemsStyleCode(){
    const flexDirection = flexItemsDemo.style.flexDirection;
    const justifyContent = flexItemsDemo.style.justifyContent;
    const flexItemsCode = document.getElementById('flex-items-css-code');
    flexItemsCode.textContent = `
      .box-container {
        display: flex; 
        flex-direction: ${flexDirection};
        justify-content: ${justifyContent};
      }
    `;
  }

  renderFlexItemsStyleCode();

  const flexDirectionSelector = document.getElementById('flex-direction-selector');
  flexDirectionSelector.addEventListener('change', () => {
    const flexDirection = flexDirectionSelector.value;
    flexItemsDemo.style.display = 'flex';
    flexItemsDemo.style.flexDirection = flexDirection;
    renderFlexItemsStyleCode();
  });

  const justifyContentSelector = document.getElementById('justify-content-selector');
  justifyContentSelector.addEventListener('change', () => {
    const justifyContent = justifyContentSelector.value;
    flexItemsDemo.style.justifyContent = justifyContent;
    renderFlexItemsStyleCode();
  });
});
