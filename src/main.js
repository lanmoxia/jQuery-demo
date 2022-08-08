//jQuery('.test')
//.addClass('red')
//.addClass('green')
//.addClass('blue')

//const x1 = jQuery('.test1')
//x1.addClass('red')


// 查找节点函数
const x2 = jQuery('.test').find('.child')
x2.addClass('red')
//jQuery('.test2')
//.find('.child')
//.addClass('red')
//.addClass('blue')


//const api1 = jQuery('.test')
//const api2 = api1.find('.child').addClass('red').addClass('green')
//const api3 = api2.end().addClass('blue')



jQuery('.test')
  .find('.child')
  .addClass('red')
  .addClass('green')
  .addClass('blue')
  .end()
  .addClass('black')
