let myImage = document.getElementById("myPhoto");
let myButton = document.getElementById('btnAnalyse');
let results = document.getElementById('myText');
let hairResponse = document.getElementById('hairResponse');

let imageURL = myImage.src;

var faces; //undefined
faces = [{
    "mo": 1,
    'age': 43,
    'style': 0.
},
{
    "mo": 0,
    "age": 16,
    "style": 32
},
]

//add a new face to the faces list
faces.push(
    {
        "mo": 0,
        "age": 124,
        "style": 6,
        "gender": "female"
    }
)

faces[0].age //43
faces[1].style //32
faces[2].gender // "female"
faces[0].gender // undefined

//could create list of records (eg. gender of 1st face, age of 1st face)


myButton.addEventListener("click", function () {
    ImageAPI.analyseFaces(imageURL, function (data) {
        console.log(data[0].faceAttributes.age);
      
        //The for loop that i was trying to figure out
      //  for(let i = 0; i < data.length; i++){
      //    let hair1 = data[i].faceAttributes.hair.bald;
      // let text = '<p> Face ' + (i + 1) + ' baldness % : ' +hair1;
    
    //assessing how much hair everyone has  
      //var x = 1; //change this number for different faces
      var x = document.getElementById("inputText").number;

      let hair = data[x-1].faceAttributes.hair.bald;
      let text = '<p> Face '+ (x) +' baldness %: ' + hair;
        myText.innerHTML += text;
        if (hair < 0.06) {
            hairResponse.innerHTML = "congratuations you have hair";
        } else {
            hairResponse.innerHTML = "Conclusion: Dr hadwin does not have enough hair";
        }
        

    }
    )})

   