import DS from 'ember-data';

export default DS.Model.extend({
  	titulo:DS.attr('string'),
  	contenido:DS.attr('string'),
  	autor:DS.attr('string'),
  	fecha:DS.attr('string',{
  		defaultValue:function(){
  			return new Date();
  		}
  	})
});
