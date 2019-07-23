window.onload = function(){
    let styleString = '';

    let para = document.querySelector('.content');
    let compStyles = window.getComputedStyle(para);

    for(let style in compStyles) {
      // console.log(style, compStyles[style]);
      styleString += `${style}:${compStyles[style]};`;
    }
    // console.log('font size: ', compStyles['font-size'])

    document.querySelector('.new').setAttribute('style', styleString)

}
