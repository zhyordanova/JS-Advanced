function getArticleGenerator(articles) {
    const content = document.querySelector('#content');
    
    return () => {
        if (articles.length > 0) {
            const nextArticle = document.createElement('article');
            nextArticle.textContent = articles.shift();
            content.appendChild(nextArticle);
        }
    }
}
