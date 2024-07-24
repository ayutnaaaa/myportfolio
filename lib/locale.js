import en from '@/public/locales/en/common.json'
import mn from '@/public/locales/mn/common.json'

export default function t(text) {
    // console.log(text)
    let lang = typeof localStorage === 'object' ? localStorage.getItem('my-language') : 'en';

    const keys = text.split('.');
    let nest= {}
    let result= ''

    if (lang === 'en') {
        nest = en
        for (const key of keys) {
            if (nest.hasOwnProperty(key)) {
                nest = nest[key]
            } else {
                nest = ''
                break
            }
        }
        result = nest
    } else {
        nest = mn
        for (const key of keys) {
            if (nest.hasOwnProperty(key)) {
                nest = nest[key]
            } else {
                nest = ''
                break
            }
        }
        result = nest
    }

    return result
}