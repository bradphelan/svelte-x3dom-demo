

// Create a promise that resolves when x3dom is loaded
let loaded = new Promise((resolve) => {
    //@ts-ignore
    window.x3dom.runtime.ready = ()=>{
        resolve();
    }
});

// Remove an event listener from an x3dom node
let removeDelayedEventListener = (node:any, event:string, handler:any)=>
{
    try {
        node.removeEventListener(event, handler);
    } catch (error) {
        console.warn("Cannot remove event handler from x3dom node");
    }
}

// Add an event listener from an x3dom node
let addDelayedEventListener = (node:any, event:string, handler:any) =>{
    loaded.then(v=>{
        node.addEventListener(event, handler);
    });
    return {
        destroy() {
            removeDelayedEventListener(node,event,handler);
        },
    };
}


// An action to add an onclick event handler to an x3dom node
export let onclick = (node:any, handler:any) => {
    return addDelayedEventListener(node,"click", handler);
};


//@ts-ignore
export function slide_out(node:any, { duration }) {
    let p = node.getFieldValue("translation")
    let xi = p.x;
    return {
        duration,
        tick: (t:number) => {
            p.x = xi-(5-5*t);
            node.setFieldValue("translation",p);
        }
    };
}