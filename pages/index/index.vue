<template>
	<view class="content">
		<home v-if="PageCur == 'home'"></home>
		<love v-if="PageCur == 'love'"></love>
		<me v-if="PageCur == 'me'"></me>
		<tabbar :PageCur='PageCur' @updatePageCur='updatePageCur'></tabbar>
	</view>
</template>

<script>
	import tabbar from '../../components/tabbar/tabbar.vue'
	import home from '../home/home.vue'
	import love from '../love/love.vue'
	import me from '../me/me.vue'
	export default {
		data() {
			return {
				PageCur:'home'
			}
		},
		components:{
			tabbar,home,love,me
		},
		onLoad() {

		},
		methods: {
			updatePageCur(e){
				this.PageCur = e
			}
		}
	}
</script>

<style>
</style>
