/*
TO DO:
-------
Currently the following script only looks at static rows to determine where the specific checkbox is and what rows to hide.
If the rows for "Shop by Size", "US Women", "US Men", "US Children" were to change, the script would not work. 
You would have to change the variables 'rowSize', 'rowWomen','rowMen','rowChildren'

To covercome this, the script would need to add the following function that:
    -Searches sheet for specific cells with values "Shop by Size", "US Women", "US Men", "US Children" and returns the row number.
        This returned row number can then be used in rowSize, rowWomen, rowMen, rowChildren etc. 
        and would allow the possiblity of "Shop by Size", "US Women", "US Men", "US Children" to be on different rows.

*/
var nameOfSheet = "Sidebar Structure";
var checkBoxValue = true;
var col = 5;

// These can change to match the sheet.
var rowSize = 4;
var rowSizeAmt = 83;
var rowWomen = 5;
var rowWomenAmt = 17;
var rowMen = 23;
var rowMenAmt = 24;
var rowChildren = 48;
var rowChildrenAmt = 39;
 
function onEdit(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheetActive = sheet.getActiveSheet();
  
  if(nameOfSheet == sheetActive.getName()){
    var cell = sheet.getActiveCell()
    var cellValue = cell.getValue();
    
/*    //Shop By Size
    if(cell.getColumn() == col && cell.getRow() == rowSize){
      if(cellValue == checkBoxValue){
        sheetActive.hideRows(rowSize+1, rowSizeAmt);
        sheetActive.getRange('E'+rowWomen).setValue(false);
        sheetActive.getRange('E'+rowMen).setValue(false);
        sheetActive.getRange('E'+rowChildren).setValue(false);
      };
      if(cellValue != checkBoxValue){
        sheetActive.showRows(rowSize+1, rowSizeAmt);

      };
    };
*/   
    
    //Shop By Size v2
    if(cell.getColumn() == col && cell.getRow() == rowSize){
      if(cellValue == checkBoxValue){
        sheetActive.hideRows(rowWomen+1, rowWomenAmt);
        sheetActive.hideRows(rowMen+1, rowMenAmt);
        sheetActive.hideRows(rowChildren+1, rowChildrenAmt);
        sheetActive.getRange('E'+rowWomen).setValue(true);
        sheetActive.getRange('E'+rowMen).setValue(true);
        sheetActive.getRange('E'+rowChildren).setValue(true);
      };
      if(cellValue != checkBoxValue){
        sheetActive.showRows(rowSize+1, rowSizeAmt);
        sheetActive.getRange('E'+rowWomen).setValue(false);
        sheetActive.getRange('E'+rowMen).setValue(false);
        sheetActive.getRange('E'+rowChildren).setValue(false);
      };
    };
    
    //US Women
    if(cell.getColumn() == col && cell.getRow() == rowWomen){
      if(cellValue == checkBoxValue){
        sheetActive.hideRows(rowWomen+1, rowWomenAmt);
      };
      if(cellValue != checkBoxValue){
        sheetActive.showRows(rowWomen+1, rowWomenAmt);
      };
    };
    
    //US Men
    if(cell.getColumn() == col && cell.getRow() == rowMen){
      if(cellValue == checkBoxValue){
        sheetActive.hideRows(rowMen+1, rowMenAmt);
      };
      if(cellValue != checkBoxValue){
        sheetActive.showRows(rowMen+1, rowMenAmt);
      };
    };
    
    //US Children
    if(cell.getColumn() == col && cell.getRow() == rowChildren){ 
      if(cellValue == checkBoxValue){
        sheetActive.hideRows(rowChildren+1, rowChildrenAmt);
      };
      if(cellValue != checkBoxValue){
        sheetActive.showRows(rowChildren+1, rowChildrenAmt);
      };
    }; 
  };
}
