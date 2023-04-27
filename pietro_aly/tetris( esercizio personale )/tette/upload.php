<?php
if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_FILES["file"])) {
  $file = $_FILES["file"];

  if ($file["error"] === UPLOAD_ERR_OK) {
    $fileName = $file["name"];
    $fileTmpPath = $file["tmp_name"];
    $fileDestPath = "uploads/" . $fileName; // Directory di destinazione del file

    if (move_uploaded_file($fileTmpPath, $fileDestPath)) {
      echo "File caricato con successo: <a href='$fileDestPath' target='_blank'>$fileName</a>";
    } else {
      echo "Si è verificato un errore durante il caricamento del file.";
    }
  } else {
    echo "Si è verificato un errore durante il caricamento del file: " . $file["error"];
  }
}
?>
