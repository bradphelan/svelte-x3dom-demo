

// Create a promise that resolves when x3dom is loaded
export let loaded = new Promise((resolve) => {
    //@ts-ignore
    window.x3dom.runtime.ready = ()=>{
        console.log("x3dom loaded");
        
        resolve();
    }
});


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