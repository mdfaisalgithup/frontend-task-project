function defaulter(e) {
    e.preventDefault();
}

function dragger(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
}

function dropper(e) {
    e.preventDefault();
    let data = e.dataTransfer.getData('text/plain');
    const draggableElement = document.getElementById(data);

    e.target.appendChild(draggableElement);

}

export { dragger, dropper, defaulter };
