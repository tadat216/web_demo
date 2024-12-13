const editors = document.querySelectorAll('.editor');
const renderOutputs = document.querySelectorAll('.htmlOutput');

editors.forEach((editorElement, index) => {
    const editor = CodeMirror(editorElement, {
        mode: 'xml',
        lineNumbers: true,
        theme: 'default',
        value: '<p>hello <span style="color:red;">aaa</span></p>'
    });

    editor.on('change', (instance) => {
        const htmlContent = instance.getValue();

        // Cập nhật nội dung của iframe tương ứng
        const doc = renderOutputs[index].contentDocument || renderOutputs[index].contentWindow.document;
        doc.open();
        doc.write(htmlContent);
        doc.close();
    });
});

const btnExpandCollapse = document.querySelector('.expand-collapse-btn');
const contentExpandCollapse = document.querySelector('.content-expand-collapse');

btnExpandCollapse.addEventListener('click', () => {
    contentExpandCollapse.classList.toggle('hidden');
    btnExpandCollapse.textContent = contentExpandCollapse.classList.contains('hidden') ? '+' : '-';
});