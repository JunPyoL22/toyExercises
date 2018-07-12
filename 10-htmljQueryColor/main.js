$(function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend
  let $p = $('body p');
  let text;
  $('body').html('');
  for (let key=0; key<2; key++ ){
    text = $p[key].textContent.trim().split(' ').join('</span><span>');
    text = '<p><span>' + text + '</span></p>';
    $('body').append(text);
  } 
  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second
 var changeSpanColor = () => {
    let rgbRandom = [Math.floor(255*Math.random()), 
                     Math.floor(255*Math.random()), 
                     Math.floor(255*Math.random())];
    let rColor = 'rgb(' + (rgbRandom[0]) + ',' + (rgbRandom[1]) + ',' + (rgbRandom[2]) + ')';
    $('body p span').css({
      'color': rColor
      });
 };

 setInterval(changeSpanColor, 1000);
  // TODO: your code here!

});