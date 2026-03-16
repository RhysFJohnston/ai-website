function searchAI() {
    // Grabs the search box value and makes sure it isnt empty and makes it lowercase for easier searching
    const input = document.getElementById("searchBox").value.trim().toLowerCase();
    
    if (input === "") {
        alert("Please enter a task to search for!");
        return;
    }

    // AI Tool Data Array, much easier for us to edit because we can just add the keywords to the array
    const tools = [
{ 
url: "OpenAI.html", 
keywords: [
"math","maths","equation","equations","algebra","calculus","statistics",
"logic","reasoning","problem solving","complex problems","analysis",
"thinking","step by step","explain maths","solve problem","hard question",
"calculation","calculate","numbers"
] 
},

{ 
url: "claude.html", 
keywords: [
"code","coding","programming","developer","software","script","debug",
"debugging","fix code","write code","build app","create app","website",
"web development","html","css","javascript","python","java",
"refactor code","code explanation","technical writing","documentation"
] 
},

{ 
url: "perplexity.html", 
keywords: [
"research","search","sources","information","find sources","fact check",
"references","citations","web search","internet search","look up",
"latest info","current info","statistics","data research","news research"
] 
},

{ 
url: "Midjourney.html", 
keywords: [
"image","images","art","artwork","picture","pictures","drawing",
"digital art","ai art","concept art","illustration","generate image",
"photo","photorealistic","design","creative art","visuals"
] 
},

{ 
url: "NotebookLM.html", 
keywords: [
"study","studying","notes","revision","learning","education",
"summarise","summary","summarize notes","lecture notes",
"pdf","read pdf","study guide","flashcards","school","university",
"exam prep","exam revision","research notes"
] 
},

{ 
url: "Llama.html", 
keywords: [
"privacy","private","local","offline","local ai","run locally",
"self hosted","self-hosted","open source","secure ai","data privacy",
"local model","no internet ai"
] 
},

{ 
url: "Gemini.html", 
keywords: [
"document","documents","long text","large file","large context",
"long context","analyse document","analyze document",
"read long text","long article","big document","long conversation",
"file analysis","upload document"
] 
},

{ 
url: "Grok.html", 
keywords: [
"news","twitter","x","social media","trending","latest news",
"live updates","current events","online trends","internet trends",
"breaking news","public opinion"
] 
},

{ 
url: "InVideo.html", 
keywords: [
"video","videos","youtube","create video","video editing",
"video generation","make video","short video","youtube shorts",
"reels","content creation","video script","video maker"
] 
},

{ 
url: "ChatGPT.html", 
keywords: [
"chat","conversation","talk","assistant","help","question",
"ask question","ideas","brainstorm","general help","explain",
"writing","essay","story","creative writing","advice",
"daily help","productivity","planning", "friend", "friends"
] 
}
];

    // 3. Logic to find the match
    const match = tools.find(tool => 
        tool.keywords.some(keyword => input.includes(keyword))
    );

    // 4. Action
    if (match) {
        window.location.href = match.url;
    } else {
        alert("No matching AI found. Try 'coding', 'math', or 'video'.");
    }
}

// 5. Bonus: Make the "Enter" key work too!
document.getElementById("searchBox").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchAI();
    }
});