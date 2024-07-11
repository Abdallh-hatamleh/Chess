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
    <!-- <link rel="stylesheet" href="style.css"> -->
     <style>
       .board * { 
    color: white;   
}

.cell {
    width: 50px;
    height: 50px;
}

.row {
    display: flex;
    width: fit-content;
    align-content: center;
    text-align: center;
}

.white-bk {
    background-color: white;
}

.green-bk {
    background-color: green;
}

#letters {
    margin-left: 10px;
}

.pieces {
    width: 100%;
    height: 100%;
}
     </style>
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
