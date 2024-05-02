console.log("Hello");
// Function to fetch daily developer news from Reddit
async function getDailyDevNews() {
    try {
        const response = await fetch('https://www.reddit.com/r/programming/top.json?limit=10&t=day');
        const data = await response.json();
        const posts = data.data.children.map(post => ({
            title: post.data.title,
            url: post.data.url
        }));
        return posts;
    } catch (error) {
        console.error('Error fetching daily developer news:', error);
        return [];
    }
}

// Function to dynamically create article elements in the DOM
async function displayDailyDevNews() {
    const posts = await getDailyDevNews();
    const leftContent = document.querySelector('.left-content');
    
    posts.forEach((post, index) => {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('article');
        
        const heading = document.createElement('h3');
        heading.textContent = post.title;
        
        const link = document.createElement('a');
        link.classList.add('article-link');
        link.href = post.url;
        link.textContent = 'Link';
        link.target = "_blank"
        
        const paragraph = document.createElement('p');
        paragraph.textContent = 'Click the above link ⬆ to read the articles';
        
        articleDiv.appendChild(heading);
        articleDiv.appendChild(link);
        articleDiv.appendChild(paragraph);
        
        leftContent.appendChild(articleDiv);
    });
}

// Call the function to display daily developer news
displayDailyDevNews();

