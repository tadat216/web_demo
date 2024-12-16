domOutput = document.getElementById('domOutput');

function traverseDOM(depth=0, element, rootElement) {
  let space = "";
  if(depth > 0) {
    let parent = element.parentNode;
    check = "";
    while (parent && parent.tagName != rootElement) {
      if(parent.nextElementSibling) check += "1";
      else check += "0";
      parent = parent.parentNode;
    }
    for(let i = check.length-1; i >= 0; i--) {
      if(check[i] == "1") space += "│&nbsp;";
      else space += "&nbsp;&nbsp;";
    }
    if(element.nextElementSibling) space += "├─";
    else space += "└─";
  }
  space = "<span style='color: gray;'>" + space + "</span>";
  text = space + "<span style='color: green;'>" + element.tagName.toLowerCase() + "</span>";
  
  if(element.className) text += '<span style="color: blue;" class="hidden class-name">.' + element.className + '</span>';
  // if(element.attributes) {
  //   text += '<span style="color: blue;" class="hidden class-name">.' + element.attributes.length + '</span>';
  // }
  const elementHTML = '<p style="line-height: 1.23;" class="hidden">' + text + '</p>';
  domOutput.innerHTML += elementHTML;
  for (let child of element.children) {
      traverseDOM(depth + 1, child);
  }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function showDomOutput() {
  const speed = document.getElementById('speed-selector').value;
  const showClass = document.getElementById('showClassCheckbox').checked;
  console.log(showClass);
  await delay(500/speed);
  for (const [index, child] of Array.from(domOutput.children).entries()) {
    child.classList.remove('hidden');
    className = child.querySelector('.class-name');
    if(showClass && className) {
      await delay(750 / speed);
      className.classList.remove('hidden');
    }
    await delay(750 / speed);
  }
}
