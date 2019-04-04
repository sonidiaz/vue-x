<template>
    <div>
        <h2>Saluod Inciodwqdwq</h2>
				<ul>
					  <li v-for="(item,index) in tareas" :key="index">
							{{ item.id }}
						</li>
				</ul>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
     name:'Inicio',
     methods: {
         ...mapActions(['getTareas'])
		 },
		 computed: {
			 ...mapState(['tareas'])
		 },
		 created() {
			 this.getTareas();
		 }
    
}
</script>