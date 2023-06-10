function move(htmlPage){
  window.location.href=htmlPage;
}

var pairs = [['p/1a.jpeg', 'p/1b.jpeg']
            ['p/2a.jpeg', 'p/2b.jpeg'],
             ['p/3a.jpeg', 'p/3b.jpeg'],
            ['p/4a.jpeg', 'p/4b.jpeg'],
            ['p/5a.jpeg', 'p/5b.jpeg'],
            ['p/6a.jpeg', 'p/6b.jpeg'],
            ['p/7a.jpeg', 'p/7b.jpeg'],
            ['p/8a.jpeg', 'p/8b.jpeg'],
            ['p/9a.jpeg', 'p/9b.jpeg'],
            ['p/10a.jpeg', 'p/10b.jpeg'],
            ['p/11a.jpeg', 'p/11b.jpeg'],
            ['p/12a.jpeg', 'p/12b.jpeg'],
            ['p/13a.jpeg', 'p/13b.jpeg'],
            ['p/14a.jpeg', 'p/14b.jpeg'],
            ['p/15a.jpeg', 'p/15b.jpeg'],
            ['p/16a.jpeg', 'p/16b.jpeg'],
            ['p/17a.jpeg', 'p/17b.jpeg'],
            ['p/18a.jpeg', 'p/18b.jpeg'],
             ['p/19a.jpeg', 'p/19b.jpeg'],
             ['p/20a.jpeg', 'p/20b.jpeg'],
             ['p/21a.jpeg', 'p/21b.jpeg'],
             ['p/22a.jpeg', 'p/22b.jpeg'],
             ['p/23a.jpeg', 'p/23b.jpeg'],
             ['p/24a.jpeg', 'p/24b.jpeg'],
             ['p/25a.jpeg', 'p/25b.jpeg'],
             ['p/26a.jpeg', 'p/26b.jpeg'],
             ['p/27a.jpeg', 'p/27b.jpeg'],
             ['p/28a.jpeg', 'p/28b.jpeg'],
             ['p/29a.jpeg', 'p/29b.jpeg'],
             ['p/30a.jpeg', 'p/30b.jpeg'],
              ['p/31a.jpeg', 'p/31b.jpeg'],
              ['p/32a.jpeg', 'p/32b.jpeg'],
              ['p/33a.jpeg', 'p/33b.jpeg'],
            ]


var first = ["id","card", "idNumber"];
var second = ["id","card", "idNumber"];
var tri = 0;
var cardPoints = 0;

function wrong()
{
  first[0].src = "p/card.jpeg";
  second[0].src = "p/card.jpeg";
  tri = 0;
}

function correct()
{
  first[0].src = "p/correct.jpeg";
  second[0].src = "p/correct.jpeg";
  cardPoints++;
  tri = 0;  
}

function flip(id,img){
  tri++;
  var v = document.getElementById(id);
  v.src= img;
  if (tri==1){
    first[0]= v;
    first[1]= img;
    first[2] = id;
  }
  else{
    second[0]=v;
    second[1] = img;
    second[2]= id;
  }
  if (tri == 2){
       //we dont know the order of pick
      if (second[2] == first[2] + 'b' || first[2] == second[2] + 'b'){
        setTimeout(correct,2000);
      }
      else{
          // לחכות כמה שניות למקרה ושתי התמונות לא דומות
        setTimeout(wrong,2000);
      }
  }
  //edit
  if (cardPoints==4){
    alert('כל הכבוד!');
    // updateWinFrance();
    // setTimeout(function(){window.location.href='map.html'},1000);
  }
}

