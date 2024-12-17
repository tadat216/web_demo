const flexDemoEditor = CodeMirror(document.getElementById('flex-demo-editor'), {
  mode: 'css',
  lineNumbers: true,
  theme: 'default',
  tabSize: 2,
  readOnly: true,
});

flexDemoEditor.setSize(null, '100%');

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

  const flexDemo = document.getElementById('flex-demo');

  renderFlexDemo(3);

  function renderFlexItemsStyleCode(){
    const flexDirection = getComputedStyle(flexDemo).flexDirection;
    const justifyContent = getComputedStyle(flexDemo).justifyContent;
    const alignItems = getComputedStyle(flexDemo).alignItems;
    const alignContent = getComputedStyle(flexDemo).alignContent;
    const flexWrap = getComputedStyle(flexDemo).flexWrap;
    htmlCode = `.box-container {
  display: flex;
  flex-wrap: ${flexWrap}; /*Chọn ít nhất 11 box để flex-wrap hoạt động*/
  flex-direction: ${flexDirection};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  align-content: ${alignContent}; /*Chọn flex-wrap: wrap; hoặc flex-wrap: wrap-reverse; để hoạt động*/
}`;

    flexDemoEditor.setValue(htmlCode);
  }

  renderFlexItemsStyleCode();

  const flexDirectionSelector = document.getElementById('flex-direction-selector');
  flexDirectionSelector.addEventListener('change', () => {
    const flexDirection = flexDirectionSelector.value;
    flexDemo.style.display = 'flex';
    flexDemo.style.flexDirection = flexDirection;
    renderFlexItemsStyleCode();
  });

  const justifyContentSelector = document.getElementById('justify-content-selector');
  justifyContentSelector.addEventListener('change', () => {
    const justifyContent = justifyContentSelector.value;
    flexDemo.style.justifyContent = justifyContent;
    renderFlexItemsStyleCode();
  });

  const alignItemsSelector = document.getElementById('align-items-selector');
  alignItemsSelector.addEventListener('change', () => {
    const alignItems = alignItemsSelector.value;
    flexDemo.style.alignItems = alignItems;
    renderFlexItemsStyleCode();
  });

  const alignContentSelector = document.getElementById('align-content-selector');
  alignContentSelector.addEventListener('change', () => {
    const alignContent = alignContentSelector.value;
    flexDemo.style.alignContent = alignContent;
    renderFlexItemsStyleCode();
  });

  const flexWrapSelector = document.getElementById('flex-wrap-selector');
  flexWrapSelector.addEventListener('change', () => {
    const flexWrap = flexWrapSelector.value;
    flexDemo.style.flexWrap = flexWrap;
    if(flexWrap === 'nowrap'){
      flexDemo.style.flexDirection = 'row-reverse';
    }else{
      flexDemo.style.flexDirection = 'row';
    }
    renderFlexItemsStyleCode();
  });

  let countBoxInput = document.getElementById('count-box-input');
  countBoxInput.addEventListener('change', () => {
    countBoxInput.value = Math.max(countBoxInput.value, countBoxInput.getAttribute('data-min-value'));
    countBoxInput.value = Math.min(countBoxInput.value, countBoxInput.getAttribute('data-max-value'));
    const countBox = countBoxInput.value;
    renderFlexDemo(countBox);   
  });
  function renderFlexDemo(countBox){
    let boxPaterm = [1, 3, 2, 2, 1, 3, 3, 2 , 3, 3, 1, 2, 2, 1, 3];
    flexDemo.innerHTML = '';
    for(let i = 0; i < countBox; i++){
      const box = document.createElement('div');
      box.classList.add(`box-${boxPaterm[i]}`);
      box.textContent = i+1;
      flexDemo.appendChild(box);
    }
  }
});
