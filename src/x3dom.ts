

let r = ()=>{};
//@ts-ignore
window.x3dom.runtime.ready = ()=>{
   r();
}

let loaded = new Promise((resolve) => {
    r = resolve;
});

export let onclick = (node:any, handler:any) => {
    loaded.then(v=>{
        node.addEventListener("click", handler);
             //   node.removeEventListener("click", handler);
    });
    return {
        destroy() {
            try {
                node.removeEventListener("click", handler);
            } catch (error) {
                console.warn("Cannot remove event handler from x3dom node");
                
            }
        },
    };
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