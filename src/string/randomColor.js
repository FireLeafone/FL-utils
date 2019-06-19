/**
 * @name randomColor
 * @link https://www.jianshu.com/p/54fc0fce46cc
 * @param {string} [type='16#'] (16#, rgba, 'hsla')
 * @param {number} [alpha=1] 透明度
 */
function randomColor (type = '16#', alpha = 1) {
  if (type == 'rgba') {
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);
    return 'rgba('+ r +','+ g +','+ b +',' + alpha +')';
  } else if (type == '16#') {
    return '#'+('00000'+ (Math.random()*0x1000000<<0).toString(16)).substr(-6); 
  } else if (type == 'hsla') {
    var colorAngle = Math.floor(Math.random()*360);
    return 'hsla('+ colorAngle +',100%,50%,'+ alpha + ')';
  }

  return;
}

export default randomColor;