import huevo from '../../images/productos/10.jpg';

const productos = [
    {
        "id": 0,
        "url": "kinder",        
        "nombre": "Kinder",
        "peso": 150,
        "descripcionBreve": "Chocolate con leche por fuera y chocolate blanco por dentro.",
        "descripcion": "La sorpresa: trufas de chocolate y almendras bañadas en chocolate.",
        "precio": 240,            
        "fotos": [
            {
                label: 'San Francisco – Oakland Bay Bridge, United States',
                imgPath: huevo,
            },
            {
                label: 'Bird',
                imgPath: huevo,
            },
            {
                label: 'Bali, Indonesia',
                imgPath: huevo,
            }
        ]
    },
    {
        "id": 1,
        "url": "aterciopelado",        
        "nombre": "Aterciopelado",
        "peso": 130,
        "descripcionBreve": "Chocolate amargo 70%, cubierto en terciopelo de chocolate blanco y manteca de cacao.",
        "descripcion": "Relleno: trufas de chocolate y almendras bañadas en chocolate.",
        "precio": 240,            
        "fotos": [
            {
                label: 'San Francisco – Oakland Bay Bridge, United States',
                imgPath: huevo,
            },
            {
                label: 'Bird',
                imgPath: huevo,
            },
            {
                label: 'Bali, Indonesia',
                imgPath: huevo,
            }
        ]
    },
    {
        "id": 2,
        "url": "incrustaciones",        
        "nombre": "Incrustaciones",
        "peso": 130,
        "descripcionBreve": "Chocolate amargo 70%, Frutos secos.",
        "descripcion": "Relleno: trufas de chocolate y almendras bañadas en chocolate.",
        "precio": 240,            
        "fotos": [
            {
                label: 'San Francisco – Oakland Bay Bridge, United States',
                imgPath: huevo,
            },
            {
                label: 'Bird',
                imgPath: huevo,
            },
            {
                label: 'Bali, Indonesia',
                imgPath: huevo,
            }
        ]
    },
    {
        "id": 3,
        "url": "diamante",        
        "nombre": "Diamante",
        "peso": 300,
        "descripcionBreve": "Chocolate amargo 70%, pintado a mano con lacas a base de manteca de cacao.",
        "descripcion": "Relleno: trufas de chocolate y almendras bañadas en chocolate.",
        "precio": 400,            
        "fotos": [
            {
                label: 'San Francisco – Oakland Bay Bridge, United States',
                imgPath: huevo,
            },
            {
                label: 'Bird',
                imgPath: huevo,
            },
            {
                label: 'Bali, Indonesia',
                imgPath: huevo,
            }
        ]
    },
    {
        "id": 4,
        "url": "todocolor",        
        "nombre": "Todo color",
        "peso": 300,
        "descripcionBreve": "Chocolate amargo 70%, pintado a mano con lacas a base de manteca de cacao.",
        "descripcion": "Ninguno es igual a otro! Relleno: trufas de chocolate y almendras bañadas en chocolate.",
        "precio": 400,            
        "fotos": [
            {
                label: 'San Francisco – Oakland Bay Bridge, United States',
                imgPath: huevo,
            },
            {
                label: 'Bird',
                imgPath: huevo,
            },
            {
                label: 'Bali, Indonesia',
                imgPath: huevo,
            }
        ]
    }
];

export default function(state = productos, action) {
    return state;    
}
