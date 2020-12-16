import {renderToStaticMarkup} from 'react-dom/server'
const componentToPDF = (component) => {
    return new Promise((resolve,reject)=>{
        const html = renderToStaticMarkup(component);
        return resolve(html)
    })
}
export default {componentToPDF}