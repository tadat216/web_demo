const htmlInputs = document.querySelectorAll('.htmlInput');
const renderOutputs = document.querySelectorAll('.htmlOutput');

htmlInputs.forEach((htmlInput, index) => {
    htmlInput.addEventListener('input', () => {
        const htmlContent = htmlInput.value;
        const doc = renderOutputs[index].contentDocument || renderOutputs[index].contentWindow.document;
        doc.open();
        doc.write(htmlContent);
        doc.close();
    });
});
