function newImage (url, left, bottom) {
    let picture = document.createElement('img');
    picture.src = url;
    picture.style.position = 'fixed';
    picture.style.left = left + 'px';
    picture.style.bottom = bottom + 'px';
    document.body.append(picture);
}

function newItem (url, left, bottom) {
    let object = newItem(url, left, bottom);
    // object.src = url;
    // object.style.position = 'fixed';
    // object.style.left = left + 'px';
    // object.style.bottom = bottom + 'px';
    // object.body.append(object);

    object.addEventListener('dblclick', function(){
        object.remove();
    })
}

newImage('assets/green-character.gif', 100, 100);
newImage('assets/pine-tree.png', 450, 200);
newImage('assets/tree.png', 200, 300);
newImage('assets/pillar.png', 350, 100);
newImage('assets/crate.png', 150, 200);
newImage('assets/well.png', 500, 425);

newItem('assets/sword.png', 500, 405);
newItem('assets/sheild.png', 165, 185);
newItem('assets/staff.png', 600, 100);