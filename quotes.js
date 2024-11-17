
let loading = false;
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

async function getRandomQuotes(){
    try {
        loading = true;
        quote.innerHTML = '<p>Loading...</p>';
        author.textContent = ''; // Clear author field during loading

        const response = await fetch('https://qapi.vercel.app/api/random');
        const data = await response.json();

    loading = false;
    quote.textContent = `"${data.quote}"`;
    author.textContent = `- ${data.author}`;
    } catch (error) {
        loading = false;
        quote.innerHTML = '<p>API Error, Check this <span class="info"><a href="https://qapi.vercel.app/" target="_blank">https://qapi.vercel.app/</a></span> for more info</p>';
    }

}


getRandomQuotes();













































