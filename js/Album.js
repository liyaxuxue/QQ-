//点击地区。显示相应的歌曲

$('#diqu a').click(function(){
    $(this).addClass('bg').css('color','#fff').siblings().removeClass('bg').css('color','');
    
    var num = $(this).index()-1;

    $('.main-midde')
    .eq(num).css('display', 'block')
    .siblings()
    .css('display', 'none');

    $('.liupai-box').css('display','none');




});
// 点击流派
$('.liupai a').click(function(){
  $(this).addClass('bg').css('color','#fff').siblings().removeClass('bg').css('color','');

  $('.liupai-box').css('display','block');


 var v = $(this).html();
 $('.liupai-box span').html(v);

});

//删除流派
$('.del').click(function(){
  $('.liupai-box').css('display','none');
  // $('.leibie-box').css('left','74px');
  $('.liupai a').eq(0).addClass('bg').css('color','#fff').siblings().removeClass('bg').css('color','');
});





//点击类别
$('.leibie a').click(function(){
  $(this).addClass('bg').css('color','#fff').siblings().removeClass('bg').css('color','');

  $('.leibie-box').css('display','block');
  var v = $(this).html();

  $('.leibie-box span').html(v);
});
//删除类别
$('.dels').click(function(){
  
  $('.leibie-box').css('display','none');
  
  $('.leibie a').eq(0).addClass('bg').css('color','#fff').siblings().removeClass('bg').css('color','');
});




// 点击年代与唱片
$('.saixuan a').click(function(){
  $(this).addClass('bg').css('color','#fff').siblings().removeClass('bg').css('color','');
});
$('#nd').click(function(){
    $('.niandai').css('display', 'block');
    $('.changp').css('display', 'none');
});
$('#cp').click(function(){
    $('.niandai').css('display', 'none');
    $('.changp').css('display', 'block');
});




$('.changp .tag-list').click(function(){
    $('.changp').css('display', 'none');
    $('.saixuan a').removeClass('bg').css('color','');
});

$('.niandai .tag-list').click(function(){
  $('.niandai').css('display', 'none');
  $('.saixuan a').removeClass('bg').css('color','');
});

//最新与最热
$('.nd-fr a').click(function(){
  $(this).addClass('bg').css('color','#fff').siblings().removeClass('bg').css('color','');
});

 
//鼠标经过
// 点击播放
var flag = 1;
$('.bofang').click(function(){
  flag++;
  if (flag%2 == 0){
    $('audio')[0].load();
    $('audio')[0].play();
    

  }else{
    $('audio')[0].load();
    $('audio')[0].pause();// 这个就是暂停
   
   
  }
});

var sum = 0;

$('.midde-bom a').click(function(){
  sum = $(this).index();
  $(this).addClass('bg').css('color','#fff').siblings().removeClass('bg').css('color','');
  if(sum > 1){
    $('.fl').css('color','#000');
  }
})
//右按钮
var flbtn = sum
$('.fr').click(function(){
 
flbtn++

if(flbtn>sum-2){
  flbtn=0;
}
$('.midde-bom a').eq(flbtn).addClass('bg').css('color','#fff').siblings().removeClass('bg').css('color','');

if(flbtn==0){
  $('.fl').css('color','#fff');
}else{
  $('.fl').css('color','#000');
}
});

//左按钮
var frbtn = sum+5
$('.fl').click(function(){
  // alert(frbtn);
  frbtn--

if(frbtn<0){
  frbtn=4;
}
$('.midde-bom a').eq(frbtn).addClass('bg').css('color','#fff').siblings().removeClass('bg').css('color','');

if(frbtn==0){
  $('.fl').css('color','#fff');
}
  
})
