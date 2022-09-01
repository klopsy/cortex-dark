function get_composition_ids(){
    ids = []
    let comp = document.getElementsByClassName('composition')
    for(i=0; i < comp.length; i++){
        ids.push(comp[i].id)
    }
    return ids
}

function display_abcjs_editor(id){
new ABCJS.Editor("abc-" + id, {
    canvas_id: "canvas-" + id,
    generate_midi: true,
    synth: {
        el: "#midi-" + id,
        options: {
            displayLoop: true,
            displayRestart: true,
            displayPlay: true,
            displayProgress: true,
            displayWarp: true
        }
    },
    warnings_id: "warnings-" + id,
    abcjsParams: {
        generateInline: true,
        generateDownload: true,
        responsive: 'resize'
    }
  })
}

window.toggleDiv = function (divId) {
    var x = document.getElementById(divId);
    if (x.style.display === "none") {
        x.style.display = "block";

    } else {
        x.style.display = "none";

    }

}

function renderAbcjs() {
    let comp_ids = get_composition_ids();

    for (i=0; i < comp_ids.length; i++){
        display_abcjs_editor(comp_ids[i]);
    }

}

window.addEventListener("load", function(event) {
    renderAbcjs();
});
