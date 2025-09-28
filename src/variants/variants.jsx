export const barVariants = {
    hover: {scale: 1.1},
    first: {opacity: 0},
    last: {opacity: 1 , transition: {duration: 2}}
}
export const navVariants = {
    first: {opacity: 0},
    last: {opacity: 1 , transition: {duration: 2}}
}
export const mobileNavVariants = {
    first: {y: -5 , opacity: 0},
    last: {y:0 , opacity: 1 , transition: {type: 'spring' , damping: 15}}
}