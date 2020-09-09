export const creatObjFun = (arr: string[]) => {
  const obj: object = {}
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index]
    obj[element] = element
  }
  return obj
}
