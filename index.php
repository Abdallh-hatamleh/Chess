<?php

$chessBoard = [];

for($i = 1; $i < 9; $i++)
{
    $chessBoard[$i] = [
    "A" =>"A$i","B" =>"B$i",
    "C" =>"C$i","D" =>"D$i",
    "E" =>"E$i","F" =>"F$i",
    "G" =>"G$i","H" =>"H$i"];
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body style="background-color: black;">
<div class="board">
    <?php 
    $isgreen = true;
    foreach($chessBoard as $rownum => $row)
    {
        echo "<div class ='row' id ='row-$rownum'>";
        echo $rownum . ": ";
        foreach($row as $key => $cell)
        {
            if($isgreen)
            {
                echo "<div class='cell green-bk' id='$cell'></div>";
                $isgreen = !$isgreen;
            }
            else {
                echo "<div class='cell white-bk' id='$cell'></div>";
                $isgreen = !$isgreen;
            }
        }
        $isgreen = !$isgreen;
        echo "</div>";
    }
    ?>
<div class="row" id="letters">
    <div class="cell">A</div>
    <div class="cell">B</div>
    <div class="cell">C</div>
    <div class="cell">D</div>
    <div class="cell">E</div>
    <div class="cell">F</div>
    <div class="cell">G</div>
    <div class="cell">H</div>
</div>
</div>
<script src="script.js"></script>
</body>
</html>