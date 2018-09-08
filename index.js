function theBeatlesPlay (musicians, inst) {
  
  for (var i=0;i<musicians.length;i++){
    var array = []
    array.push(`${musicians[i]} plays ${inst[i]}`)
  }
  return array
}