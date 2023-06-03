// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: 'src',
    app:{
        head:{
            link:[
                {rel:'stylesheet',href:'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css'}
            ],
            script:[
               
            ]
        }
    }
})
