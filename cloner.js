window.onload = function(){
    let para = document.querySelector('.content');
    let compStyles = window.getComputedStyle(para);
    for(let style in compStyles) {
      console.log(style, compStyles[style])
    }
    console.log('font size: ', compStyles['font-size'])
}
