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
const edqizNormal = [
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
    value: 'Z ',
  },
 
]
const toNavyText = (val) => {
    return {color:'navy',value:val}
}
const toPinkText = (val) => {
    return {color:'pink',value:val}
}
const toNavyWord = (word) => {
    return word.split('').map(el=>{return toNavyText(el)})
}
const edit = toNavyWord("EDIT ")
const create = toNavyWord("CREATE ")
const newWord = toNavyWord("NEW ")
const list = toNavyWord("List ")




exports.word = {
  edqiz: edqiz,
  create: [...create,...newWord,...edqiz],
  edit: [...edit,...edqiz],
  list: [...edqizNormal,...list],


}
