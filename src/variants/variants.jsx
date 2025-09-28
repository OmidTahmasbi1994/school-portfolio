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
    first: {y: -15},
    last: {y:0 , transition: {type: 'spring' , stiffness: 70}}
}