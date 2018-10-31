<template>
	<div class="home mt-3">
		<button @click="goToMenu" class="btn btn-success">Let's go</button>
	</div>
</template>

<script>
	export default{
		methods:{
			goToMenu:function(){
				//跳转上一次浏览的页面
				// this.$router.go(-1);
				// 
				// 指定跳转地址
				// this.$router.replace('/menu');
				// 
				// 指定跳转到路由名字下
				// this.$router.replace({name:"menuLink"});
				// 
				// 通过push进行跳转
				// this.$router.push('/menu');
				this.$router.push({name:"aboutLink"});
			}
		}
	}
</script>

<style>
	.home{
		width: 1110px;
		height: 693px;
		background: url('../assets/timg.jpg') center center no-repeat;
		background-size: 100%;
	}
</style>