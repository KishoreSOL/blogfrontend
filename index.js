document.addEventListener('DOMContentLoaded', (event) => {

        function fetchAndDisplayArticle(id) {
            fetch(`http://localhost:8080/getarticle/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); 
            })
            .then(data => {
                createArticleCard(data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
        }
        
        function createArticleCard(articleData) {
            const { title, content, author } = articleData;
        
            const cardBody = document.createElement("div");
            cardBody.className = "card-body";
        
            const cardTitle = document.createElement("h5");
            cardTitle.className = "card-title";
            cardTitle.textContent = title;
        
            const cardText = document.createElement("p");
            cardText.className = "card-text";
            const words = content.split(/\s+/); 
            const limitedWords = words.slice(0, 50);
            const truncatedContent = limitedWords.join(' ');
            cardText.textContent = truncatedContent;
    
        
            const cardAuthor = document.createElement("p");
            cardAuthor.className = "card-author";
            cardAuthor.textContent = `Author: ${author}`;
        
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            cardBody.appendChild(cardAuthor);
        
            const cardContainer = document.getElementById("card");
            cardContainer.appendChild(cardBody);
        }
        
        
        for (let i = 1; i <= 7; i++) {
            fetchAndDisplayArticle(i);
        }
    });
    