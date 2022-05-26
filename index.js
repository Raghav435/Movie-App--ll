
async function getMovie(){
    // omdb url = http://www.omdbapi.com/?apikey=[yourkey]&;
    let movie = document.getElementById("search_movie").value;
    const url =`https://www.omdbapi.com/?apikey=c8123887&s=${movie}`
   
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.Search);
        append(data.Search);
        // fetch(tt0372784)
        // .then(function(res){
        //     return res.json();
        // })
        // .then(function(res){
        //     // append(res.Search);
        //     console.log(res.imdbID);
        // })
    }catch(err){
        console.log(err);
        // let div =document.createElement("div");

        let img = document.createElement("img");
        img.src = err.img;
        document.body.append(img);

        // document.getElementById("errContainer").append(div);
        // append1();
        // document.getElementById("container").append(image);
    }
}
function append(data){
    data.forEach(function(ele){
        let div =document.createElement("div");

        let img = document.createElement("img");
        img.src = ele.Poster;
    
        let h3 = document.createElement("h3");
        h3.innerText = `Movie Name - ${ele.Title}`;
        h3.style.color = "white";

        let rlsDate = document.createElement("p");
        rlsDate.innerText = `Realease Year - ${ele.Year}`;
        rlsDate.style.color = "white";

       

        
        let imdbID = document.createElement("p");
        imdbID.innerText = `Rating - ${ele.imdbID}`;
        imdbID.style.color = "white";

       
    
        div.append(img, h3, rlsDate, imdbID);
        document.getElementById("container").append(div);
    })
}

// function append1(da){
//     da.forEach(function(ele){
//         let div =document.createElement("div");

//         let img = document.createElement("img");
//         img.src = ele.image;
//         div.append(img);
//         document.getElementById("errContainer").append(div);

//     })
// }