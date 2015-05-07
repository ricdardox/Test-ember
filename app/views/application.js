import Ember from 'ember';
export default Ember.View.extend({
  keyUp: function(evt) {
    var tagdata = [];
    var eventdata = [];
    var scriptruns = [];
    var text = $('#contenido').val();
    text = $('<span>'+text+'</span>').text(); //strip html
    text = text.replace(/(\s|>|^)(https?:[^\s<]*)/igm,'$1<div class="ancho-video"><a href="$2" class="oembed">$2</a></div>');
    text = text.replace(/(\s|>|^)(mailto:[^\s<]*)/igm,'$1<div class="ancho-video"><a href="$2" class="oembed">$2</a></div>');
  
    $('#out').empty().html(text); 
    
    $(".oembed").oembed(null,{
       maxWidth: 300,
                        maxHeight: 200,
      apikeys: {
        //etsy : 'd0jq4lmfi5bjbrxq2etulmjr',
        amazon : 'caterwall-20',
        //eventbrite: 'SKOFRBQRGNQW5VAS6P',
      },
      //maxHeight: 200, maxWidth:300
    });

  } 
}); 

$(function(){
  console.dir(3)
  $('.timeline li').oembed()

  })