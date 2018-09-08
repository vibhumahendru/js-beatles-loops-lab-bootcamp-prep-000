function theBeatlesPlay (musicians, inst) {
  
  for (var i=0;i<musicians.length;i++){
    var array = []
    var x = `${musicians[i]} plays ${inst[i]}`
    array.push(x)
  }
  return array
}