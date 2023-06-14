
//
// SHOW/HIDE TABLE COLUMN
//


function hide_show_table(col_name)
{
 console.log(col_name);
 var checkbox_val=document.getElementById(col_name).value;
 console.log(checkbox_val);
 if(checkbox_val=="hide")
 {
  var all_col=document.getElementsByClassName(col_name);
  for(var i=0;i<all_col.length;i++)
  {
   all_col[i].style.display="none";
  }
  document.getElementById("head_"+col_name).style.display="none";
  document.getElementById(col_name).value="show";
 }
	
 else
 {
  var all_col=document.getElementsByClassName(col_name);
  for(var i=0;i<all_col.length;i++)
  {
   all_col[i].style.display="table-cell";
  }
  document.getElementById("head_"+col_name).style.display="table-cell";
  document.getElementById(col_name).value="hide";
 }
}

//
// STRETCH TABLE COLUMN
//

var tables = document.getElementById('dataTable');
resizableGrid(tables);


function resizableGrid(table) {
    var row = table.getElementsByTagName('tr')[0],
    cols = row ? row.children : undefined;
    console.log(cols);
    if (!cols) return;

    for (var i=0;i<cols.length;i++){
        var div = createDiv(table.offsetHeight);
        cols[i].appendChild(div);
        cols[i].style.position = 'relative';
        setListeners(div);
    }
}

function createDiv(height){
    var div = document.createElement('div');
    div.style.top = 0;
    div.style.right = 0;
    div.style.width = '2px';
    div.style.position = 'absolute';
    div.style.cursor = 'col-resize';
    /* remove backGroundColor later */
    div.style.backgroundColor = 'black';
    div.style.userSelect = 'none';
    /* table height */
    div.style.height = height+'px';
    return div;
}

function setListeners(div){
    var pageX,curCol,nxtCol,curColWidth,nxtColWidth;
    div.addEventListener('mousedown', function (e) {
     curCol = e.target.parentElement;
     nxtCol = curCol.nextElementSibling;
     pageX = e.pageX;
     curColWidth = curCol.offsetWidth
     if (nxtCol)
      nxtColWidth = nxtCol.offsetWidth
    });
   
    document.addEventListener('mousemove', function (e) {
     if (curCol) {
      var diffX = e.pageX - pageX;
    
      if (nxtCol)
       nxtCol.style.width = (nxtColWidth - (diffX))+'px';
   
      curCol.style.width = (curColWidth + diffX)+'px';
     }
    });
   
   document.addEventListener('mouseup', function (e) { 
    curCol = undefined;
    nxtCol = undefined;
    pageX = undefined;
    nxtColWidth = undefined;
    curColWidth = undefined;
    });
   }