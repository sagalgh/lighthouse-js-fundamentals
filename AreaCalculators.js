function calculateRectangleArea(length, width) {
  if (length < 0 || width < 0 ){
    return undefined
  }
  const rectangleArea = length * width;
  return rectangleArea;
}    

function calculateTriangleArea(base, height) {
  if (base < 0 || height < 0 ){
    return undefined
  }
  const triangleArea = base * height / 2
  return triangleArea;
}
function calculateCircleArea(radius) {
  if (radius < 0 ){
    return undefined
  }
  const circleArea = Math.PI * Math.pow(radius, 2)
  return circleArea;
}

console.log(calculateCircleArea(1.5));

