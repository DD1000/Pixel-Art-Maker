colorPicker = document.getElementById('colorPicker');
submit = document.getElementById('sizePicker').lastElementChild;
heightForm = document.getElementById('inputHeight');
widthForm = document.getElementById('inputWidth');

submit.addEventListener('click', function(event){
  event.preventDefault();
  makeGrid();
});

function makeGrid(event) {

  canvas = document.querySelector('#pixelCanvas');
  if(canvas.hasChildNodes())
  {
    grid = canvas.querySelector('div');
    grid.parentNode.removeChild(grid);
  }

  var flexBox = document.createElement('div');
  flexBox.addEventListener('click', function(event){
  var clickedElem = event.target;
  var color = colorPicker.value;
  clickedElem.style.backgroundColor = color;
})
  document.querySelector('#pixelCanvas').appendChild(flexBox)
  flexBox.setAttribute('style', 'width: 300px; height: 300px; border-style: solid; border: 10px; display: flex; flex-wrap: wrap; padding: 0px; margin: 0px;');
  height = heightForm.value;
  width = widthForm.value;
  var gridBoxWidth = (300/width)-6;
  var gridBoxHeight = (300/height)-6;
  var integer = 9;
  for (var i = 0; i < width; i++)
  {
    for(var j = 0; j < height; j++)
    {
      var gridBox = document.createElement('div');
      document.querySelector('#pixelCanvas').firstElementChild.appendChild(gridBox)
      gridBox.setAttribute('style', 'width: ' + gridBoxWidth + 'px; height: ' + gridBoxHeight + 'px; border-style: solid; padding: 0px; margin: 0px;');
      gridBox.id = 'gridBox';
    }
  }
}
