<?php
$userid = $_GET['UserID'];
$password = $_GET['Password1'];


$con= new mysqli("localhost:3306", "root", "", "finalproject");
if ($con->connect_errno) {
    die('Could not connect: ' . $con->connect_errno);
}
$sql = "SELECT * FROM user WHERE Username='$userid'";

$result = $con->query($sql);
$result = $result->fetch_array();
$username = $result[0];
$pass = $result[1];



if ($username == "") {
    $val = "False";
    echo 2;
}
elseif ($password != $pass) {
    echo 0;
}
else {
    echo 1;
}

function debug_to_console( $data ) {
    if ( is_array( $data ) )
        $output = "<script>console.log( 'Output: " . implode( ',', $data) . "' );</script>";
    else
        $output = "<script>console.log( 'Output: " . $data . "' );</script>";
    echo $output;
}
?>

