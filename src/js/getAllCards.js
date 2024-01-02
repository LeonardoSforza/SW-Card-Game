for (let i = 1; i <= 252; i++) {
    try {
        // Make a request to your server to get the cards
        const response = await fetch(`http://localhost:3000/api/getCard/${i}`);
        const data = await response.json();
        console.log(data);
        const img = document.createElement("img");
        img.src = data["BackArt"];
        document.body.appendChild(img);
  
        // Now you can work with the 'data' object, which contains the information about all the cards
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
}