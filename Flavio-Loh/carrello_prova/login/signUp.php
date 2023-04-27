


<?php
// TODO







// Connessione al database
$dbHost = 'localhost';
$dbUser = 'username';
$dbPassword = 'password';
$dbName = 'database_name';
$conn = mysqli_connect($dbHost, $dbUser, $dbPassword, $dbName);

// Controllo se l'utente ha inviato il form di registrazione
if (isset($_POST['register'])) {
    // Recupero i dati dal form
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);

    // Controllo se l'utente esiste già nel database
    $query = "SELECT * FROM users WHERE email='$email'";
    $result = mysqli_query($conn, $query);
    if (mysqli_num_rows($result) > 0) {
        // Se l'utente esiste già, visualizzo un messaggio di errore
        echo "L'utente con questa email è già registrato.";
    } else {
        // Se l'utente non esiste, inserisco i dati nel database
        $query = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password')";
        mysqli_query($conn, $query);

        // Redirect alla pagina di login
        header('Location: login.php');
    }
}

?>

<!-- Form di registrazione -->
<form method="post">
    <label for="name">Nome:</label>
    <input type="text" name="name" required>
    <br>
    <label for="email">Email:</label>
    <input type="email" name="email" required>
    <br>
    <label for="password">Password:</label>
    <input type="password" name="password" required>
    <br>
    <input type="submit" name="register" value="Registrati">
</form>
