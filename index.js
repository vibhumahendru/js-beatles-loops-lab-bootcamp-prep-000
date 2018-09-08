function theBeatlesPlay (musicians, inst) {
  var array = []
  for (var i=0;i<musicians.length;i+1){
    var x = `${musicians[i]} plays ${inst[i]}`
    array.push(x)
  }
  return x
}