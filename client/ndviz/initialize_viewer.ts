
import {Viewer} from 'neuroglancer/viewer';
import {getCurrentState} from 'neuroglancer/url_hash_state';

export function initializeNdvizViewer(viewer: Viewer) {
    // set xy layout as default 
    let currentState = getCurrentState();
    if (currentState['layout'] === undefined) {
        viewer.layoutName.value = "xy";
    } 

    console.log(viewer.keyMap);
    console.log(viewer.keyCommands);    
}