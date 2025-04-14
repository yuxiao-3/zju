//poems
var words = [
    '大不自多',
    '海纳江河',
    '惟学无际',
    '际于天地',
    '形上谓道兮',
    '形下谓器',
    '礼主别异兮',
    '乐主和同',
    '知其不二兮',
    '尔听斯聪',
    '国有成均',
    '在浙之滨',
    '昔言求是',
    '实启尔求真',
    '习坎示教',
    '始见经纶',
    '无曰已是',
    '无曰遂真',
    '靡革匪因',
    '靡故匪新',
    '何以新之',
    '开物前民',
    '嗟尔髦士',
    '尚其有闻',
    '念哉典学',
    '思睿观通',
    '有文有质',
    '有农有工',
    '兼总条贯',
    '知至知终',
    '成章乃达',
    '若金之在熔',
    '尚亨于野',
    '无吝于宗',
    '树我邦国',
    '天下来同'
];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h1');
      let texttwo = document.querySelector('.texttwo').querySelector('h1');

      setTimeout(function(){
        textone.innerHTML = '国有成均，在浙之滨';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体'
          texttwo.style.color = '#E8F9FD';
          texttwo.style.fontFamily = '楷体'
          texttwo.innerHTML = '';
      },28000)
      setTimeout(function(){
        textone.innerHTML = '海纳江河，启真厚德';
        texttwo.innerHTML = '开物前民，树我邦国';
      },112500)
