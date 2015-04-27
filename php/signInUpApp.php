<?php
	$firstname = $_GET['First'];
	$lastname = $_GET['Last'];
	$userid = $_GET['UserID'];
	$password = $_GET['Password1'];
	$email = $_GET['Email'];
    $city = $_GET['City'];
    $color = $_GET['Color'];

	$con= new mysqli("localhost:3306", "root", "", "finalproject");
	if ($con->connect_errno) {
		 die('Could not connect: ' . $con->connect_errno);
	}
	$sql = "SELECT * FROM user WHERE Username='$userid'";
    try {
        $result = $con->query($sql);
        // order of return: username, password, first,last, email, city, color.
        $result = $result->fetch_array();
    }
    catch (Exception $e) {
        echo "Executed";
    }

    if ($result[0] != "") {
        $val = "False";
        echo true;
	} 
	else {
        $sql="INSERT INTO user (Username, Password, FirstName,Lastname,Email,City,Color) VALUES('$userid', '$password', '$firstname', '$lastname', '$email','$city','$color')";
        $result = $con->query($sql);
        $val =  "True";
        echo false;
	}

    function debug_to_console( $data ) {
        if ( is_array( $data ) )
            $output = "<script>console.log( 'Output: " . implode( ',', $data) . "' );</script>";
        else
            $output = "<script>console.log( 'Output: " . $data . "' );</script>";
        echo $output;
    }
?>

