window.jQuery = function (selectorOrArray) {
  //debugger
  let elements
  if (typeof selectorOrArray === 'string') {
    elements = document.querySelectorAll(selectorOrArray)
  } else if (selectorOrArray instanceof Array) {
    elements = selectorOrArray
  }

  return {
    oldApi: selectorOrArray.oldApi,
    find(selector) {
      let array = []
      for (let i = 0; i < elements.length; i++) {
        const elements2 = Array.from(elements[i].querySelectorAll(selector))
        newArray = array.concat(elements2)
      }
      array.oldApi = this
      //const api2 = jQuery(array)
      //return api2 
      return jQuery(array)
    },
    end() {
      return this.oldApi
    },
    addClass(className) {
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i]
        element.classList.add(className)
        //elements[i].classList.add(className)
      }
      return this // 这里 this 是 api1
    },
  }
}
