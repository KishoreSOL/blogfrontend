 console.log("aojjdffoadb");

 document.getElementById("articleForm").addEventListener("submit", async function(event) {
  event.preventDefault(); 

  const formData = new FormData();
  formData.append('title', document.getElementById('title').value);
  formData.append('content', document.getElementById('content').value);
  formData.append('author', document.getElementById('author').value);
  formData.append('image_data', document.getElementById('article_image').files[0]); 

  await fetch("http://localhost:8080/addarticle", {
      method: "POST",
      body: formData 
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
});



    