$(function() {
  var newGrid = $('#button');//get the submit button
  newGrid.css('cursor','pointer');//change cursor for when its over the button
  var colorPicker = $('#colorPicker');//get the color picker
  colorPicker.css('cursor','pointer');//change cursor for when its over the picker

  newGrid.on('click', function(event) {
    event.preventDefault();
    var height = $('#inputHeight').val();//get height
    var length = $('#inputLength').val();//get Length
    makeGrid(height,length);
  });

  function makeGrid(rows, columns) {
    //get all the values we need to manipulate
    var pixelCanvas = $('#pixelCanvas');
    var tableRows;//will be set to tr's that don't exist until submit is pressed
    pixelCanvas.empty();//reset canvas everytime submit is clicked

    for (var i=0; i<rows; i++) {//height
      pixelCanvas.append('<tr></tr>');//add table row children to the canvas
      tableRows = $('tr');//set tableRows to tr as new tr's are created
    }
    for (var j=0; j<columns; j++) {//length
      tableRows.append('<td></td>');//add table cell children to each row
    }
    //call function that colors and erases cells
    editCells()
  }

  function editCells() {
    var tableCells = $('td');//get table cell elements
    tableCells.css('cursor','cell');//change cursor when over the table cells
    //event listener for coloring or erasing a table cell
    tableCells.on('mouseover mousedown dblclick', function(event) {//will begin listening when mouse is over the element or button is pressed or double click
      event.preventDefault();
      var color = $('#colorPicker').val();//get the color

      if(event.buttons===1) {//only color if left click is pressed on mouse
          $(this).css('background-color', color);
      }
      if(event.type==='dblclick') {//only erase if they double click
        $(this).css('background-color', 'white');
      }
    });
  }
});
