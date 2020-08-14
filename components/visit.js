import { Form } from './form.js';

export class Visit {
    constructor(placeTo, selectDoctor) {
        this.selectedDoctor = '';
        this.placeTo = placeTo;
        this.doctors = 
                {'cardio' : [
                    {
                        label: 'Цель визита',
                        type: 'text',
                        required: true,
                    },
                    {
                        label: 'Краткое описание визита',
                        type: 'text',
                        required: true
                    },
                    {
                        label: ' срочность',
                        type: 'select',
                        options: ['обычная', 'приоритетная', 'неотложная']
                    },
                    {
                        label: 'обычное давление',
                        type: 'text',
                        required: true
                    },
                    {
                        label: 'индекс массы тела',
                        type: 'text',
                        required: true
                    },
                    {
                        label: 'перенесенные заболевания сердечно-сосудистой системы',
                        type: 'text',
                        required: true
                    },
                    {
                        label: 'возраст',
                        type: 'text',
                        required: true
                    },
                    {
                        label: 'ФИО',
                        type: 'text',
                        required: true
                    },
                    {
                        label: 'дополнительные комментарии',
                        type: 'text',
                        required: false
                    }
                ],
                'dentist' : [
                    {
                        label: 'Цель визита',
                        type: 'text',
                        required: true
                    },
                    {
                        label: 'Краткое описание визита',
                        type: 'text',
                        required: true
                    },
                    {
                        label: ' срочность',
                        type: 'select',
                        options: ['обычная', 'приоритетная', 'неотложная']
                    },
                    {
                        label: 'дата последнего посещения',
                        type: 'text',
                        required: true
                    },
                    {
                        label: 'ФИО',
                        type: 'text',
                        required: true
                    },
                    {
                        label: 'дополнительные комментарии',
                        type: 'textarea',
                        required: false
                    }
                ],
                'theraphist': [
                    {
                        label: 'Цель визита',
                        type: 'text',
                        required: true
                    },
                    {
                        label: 'Краткое описание визита',
                        type: 'textarea',
                        required: true
                    },
                    {
                        label: ' срочность',
                        type: 'select',
                        options: ['обычная', 'приоритетная', 'неотложная']
                    },
                    {
                        label: 'возраст',
                        type: 'text',
                        required: true
                    },
                    {
                        label: 'ФИО',
                        type: 'text',
                        required: true
                    },
                    {
                        label: 'дополнительные комментарии',
                        type: 'textarea',
                        required: false
                    }
                ]
            }
        
        this.form = new Form();
        this.selectDoctor = selectDoctor;
    }

    getDoctorFields() {
        return this.doctors[this.selectedDoctor];
    }
    
    getDoctorModalHTML() {
        const fields = this.getDoctorFields();
        let html = '';

        fields.forEach(field => {
            switch(field.type) {
                case 'text':
                    html += this.form.text(field);
                    break;
                 case 'select':
                    html += this.form.select(field); 
                    break;   
                    case 'textarea':
                        html += this.form.textarea(field); 
                        break;       
            }
        });
        return html;
    }

    buildHTML() {
        let insertIntoo = document.querySelector(this.placeTo);
        
        insertIntoo.innerHTML = this.getDoctorModalHTML();
        console.log(insertIntoo.innerHTML);
    }

    init() {
        // console.log('init');
        const selectDoc = document.querySelector(this.selectDoctor);
        const that = this;
        selectDoc.addEventListener('change', function(e) {
            console.log(e.target.value);
            that.selectedDoctor = e.target.value;
            that.buildHTML();
        })
        
    }
}    