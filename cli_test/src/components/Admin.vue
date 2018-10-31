<template>
	<h1>Admin</h1>
</template>

<script>
	export default {
		data(){
			return {
				name: 'henry'
			}
		},
		//组件内守卫
		
		//组件进入前
		// beforeRouteEnter: (to, from, next) =>{
		// 	// alert('hello' + ' ' +this.name);
		// 	// next();
		// 	next(vm =>{
		// 		alert("hello" + ' ' + vm.name);
		// 	})
		// },

		//组件离开
		// beforeRouteLeave: (to, from, next) =>{
		// 	if(confirm('离开当前页面吗？') == true) {
		// 		next();
		// 	} else {
		// 		next(false);
		// 	}
		// }
	}
</script>