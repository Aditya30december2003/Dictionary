const apiUrl="https://api.dictionaryapi.dev/api/v2/entries/en/";
let search=document.querySelector('.search');
let word=document.querySelector('.word');
let type=document.querySelector('.type');
let phonetic=document.querySelector('.phonetic');

let meaning=document.querySelector('.meaning');
let line=document.querySelector('.line');

let wordInfo=document.querySelector('.word-info');

let vertical=document.querySelector('.line-container')

async function dictionaryApi(){
    let inputWord=document.querySelector('.inputWord').value;
     fetch(`${apiUrl}${inputWord}`)
     .then((response)=>response.json())
     .then((data)=>{
        console.log(data)
        word.innerHTML=data[0].word;
        type.innerHTML=data[0].meanings[0].partOfSpeech;
        phonetic.innerHTML=data[0].phonetic;
        meaning.innerHTML=data[0].meanings[0].definitions[0].definition;
        if(data[0].meanings[0].definitions[0].example==undefined){
            line.innerHTML="";
            vertical.style.display="none"
        }
        else{
            line.innerHTML=data[0].meanings[0].definitions[0].example;
            vertical.style.display="block"
        }
        
     })
}

search.addEventListener('click',()=>{
    dictionaryApi();
    wordInfo.style.display="block";
})

window.addEventListener('DOMContentLoaded',()=>{
        document.querySelector('.inputWord').value="";
        word.innerHTML="";
        type.innerHTML="";
        phonetic.innerHTML="";
        meaning.innerHTML="";
        line.innerHTML="";
})