import Ember from 'ember';

export default Ember.Controller.extend({
		model:function(){
		return this.store.find('post');
	},
	actions:{
		guardar:function(){
			var nuevoPost=this.store.createRecord('post',{
				titulo:this.get('titulo'),
				contenido:this.get('contenido'),
				autor:this.get('autor')
			});
			nuevoPost.save();
			this.setProperties({
				titulo:'',
				contenido:'',
				autor:''
			});
			$('#out').html('')
		}
	}
});
