export const addProblemBoxClass = (
  setBoxClass,
  oldClass,
  additionalClass,
  baseClass,
  timeout = 1000
) => {
  setBoxClass([...oldClass, additionalClass])
  setTimeout(() => {
    setBoxClass([baseClass])
  }, timeout)
}
