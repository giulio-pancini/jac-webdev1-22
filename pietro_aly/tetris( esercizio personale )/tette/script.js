// Aggiungi un listener per il submit del form
document.getElementById("uploadForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impedisce il comportamento predefinito del form
  
    var fileInput = document.getElementById("fileInput");
    var file = fileInput.files[0];
  
    if (file) {
      var formData = new FormData();
      formData.append("file", file);
  
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "upload.php", true);
  
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          document.getElementById("message").textContent = xhr.responseText;
          fileInput.value = ""; // Resetta l'input del file
        }
      };
  
      xhr.send(formData);
    }
  });
  