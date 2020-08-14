export class Form {
    select(data) {
        let opt = '';
        data.options.forEach(element => {
            opt += `<option value="${element}">${element}</option>`;
        });
        //return `<select name="${data.name}">
        return `<p>${data.label} <select name="exampleSelect" class="${data.required ? 
            'required': ''}">
            ${opt}
        </select></p>`;
    }
    text(data) {
        return `<p>${data.label} <input name="exampleText" class="${data.required ? 
            'required': ''}" type="text" size="40" /></p>`;
    }
    textarea(data) {
        return `<p>${data.label} <textarea name="exampleText" class="${data.required ? 
            'required': ''}"></textarea></p>`;
    }
}

