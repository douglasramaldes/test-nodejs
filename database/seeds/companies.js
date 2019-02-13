'use strict';

const
    Company = require('../../src/models/companyModel').Company

module.exports = () => (

    [
        new Company({
            fantasyName: 'BelezaNaWeb',
            plan: {
                name: 'Business'
            },
            phone: '(xx) xxxx-xxxx',
            isActive: true
        })
    ]

)