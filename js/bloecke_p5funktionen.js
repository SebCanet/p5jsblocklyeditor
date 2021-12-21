// Pt 2021 - MIT-License

//Kategorie: p5-Funktionen
Blockly.Blocks['setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("setup()");
    this.appendValueInput("zeichenflaecheVariable")
    this.appendDummyInput()
        .appendField("Breite =")
        .appendField(new Blockly.FieldNumber(startWidth, 0, maxKoord, 1), "canvasBreite")
        .appendField("Höhe =")
        .appendField(new Blockly.FieldNumber(startWidth, 0, maxKoord, 1), "canvasHoehe");
    this.setInputsInline(true);         
    this.appendStatementInput("do")
        .setCheck(null);
    this.setColour(farbep5SetupDraw);
 this.setTooltip("Die setup()-Funktion wird einmal beim Programmstart ausgeführt.");
 this.setHelpUrl("https://p5js.org/reference/#/p5/setup");
  }
};

Blockly.JavaScript['setup'] = function(block) {
  var number_breite = block.getFieldValue('canvasBreite');
  var number_hoehe = block.getFieldValue('canvasHoehe');
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  var value_varName = Blockly.JavaScript.valueToCode(block, 'zeichenflaecheVariable', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'p5sketch.setup = function() {\n  ' + value_varName + ' = p5sketch.createCanvas(' + number_breite + ', ' + number_hoehe + ');\n  p5sketch.angleMode(p5sketch.DEGREES);\n' + statements_do + '};\n';
  return code;
};

Blockly.Blocks['draw'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("draw()");
    this.appendStatementInput("do")
        .setCheck(null)
    this.setColour(farbep5SetupDraw);
    this.setTooltip('Die draw()-Funktion wird ständig wiederholt.');
    this.setHelpUrl('https://p5js.org/reference/#/p5/draw');
  }
};

Blockly.JavaScript['draw'] = function(block) {
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  var code = 'p5sketch.draw = function() {\n' + statements_do + '};\n';
  return code;
};

Blockly.Blocks['mousepressed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Wenn Maus geklickt...");
    this.appendStatementInput("do")
        .setCheck(null)
    this.setColour(farbep5Funktionen);
    this.setTooltip('Führe die folgenden Anweisungen aus, wenn die Maus geklickt wurde.');
    this.setHelpUrl('https://p5js.org/reference/#/p5.Element/mousePressed');
  }
};

Blockly.JavaScript['mousepressed'] = function(block) {
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  var code = 'p5sketch.mousePressed = function() {\n' + statements_do + '};\n';
  return code;
};

Blockly.Blocks['keypressed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Wenn eine Taste gedrückt...");
    this.appendStatementInput("do")
        .setCheck(null)
    this.setColour(farbep5Funktionen);
    this.setTooltip('Führe die folgenden Anweisungen aus, wenn eine Taste auf der Tastatur gedrückt wurde.');
    this.setHelpUrl('https://p5js.org/reference/#/p5/keyPressed');
  }
};

Blockly.JavaScript['keypressed'] = function(block) {
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  var code = 'p5sketch.keyPressed = function() {\n' + statements_do + '};\n';
  return code;
};