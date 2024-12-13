domOutput = document.getElementById('domOutput');

function traverseDOM(depth=0, element, is_last) {
  let space = "";
  if(depth > 0) {
    let parent = element.parentNode;
    check = "";
    while (parent && parent.tagName != "BODY") {
      if(parent.nextElementSibling) check += "1";
      else check += "0";
      parent = parent.parentNode;
    }
    for(let i = check.length-1; i >= 0; i--) {
      if(check[i] == "1") space += "│";
      else space += "&nbsp;";
    }
    if(element.nextElementSibling) space += "├";
    else space += "└";
  }
  space = "<span style='color: gray;'>" + space + "</span>";
  text = space + "<span style='color: green;'>" + element.tagName.toLowerCase() + "</span>";
  
  if(element.className) text += '<span style="color: blue;">.' + element.className + '</span>';
  domOutput.innerHTML += text + '<br>';
  for (let child of element.children) {
      traverseDOM(depth + 1, child);
  }
}
