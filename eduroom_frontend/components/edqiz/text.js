const { MapsRestaurant } = require("material-ui/svg-icons")

const edqiz = [
    {
      color: 'navy',
      value: 'E',
    },
    {
      color: 'purple',
      value: 'D',
    },
    {
      color: 'navy',
      value: 'Q',
    },
    {
      color: 'pink',
      value: 'I',
    },
    {
      color: 'navy',
      value: 'Z',
    },
    {
      color: 'navy',
      value: '!',
    },
]
const toNavyText = (val) => {
    return {color:'navy',value:val}
}
const toPinkText = (val) => {
    return {color:'pink',value:val}
}
const create = "CREATE ".split('').map(el=>{return toNavyText(el)})
const newWord = "NEW ".split('').map(el=>{return toNavyText(el)})
exports.word = {
  edqiz: edqiz,
  create: [...create,...newWord,...edqiz]
}
