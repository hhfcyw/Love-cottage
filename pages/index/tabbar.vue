<template>
<view class="">
	<view class="box">
		<view class="">
			<view class="" @click="NavChange" data-cur="index">
				<view class='cuIcon-cu-image'>
					<image v-if="PageCur=='index'" src="../../static/tabBar/index_cur.png"></image>
					<image v-if="PageCur != 'index'" src="../../static/tabBar/index.png"></image>
				</view>
				<view :class="PageCur=='index'?'color_main':'text-gray'">首页</view>
			</view>

			<view @click="NavChange" class="" data-cur="love">
				<!-- <image class="logo_btn" mode="widthFix" src="../../static/logo.png"></image> -->
				<view :class="PageCur=='love'?'color_main':'text-gray'">爱的言语</view>
			</view>

			<view class="" @click="NavChange" data-cur="me">
				<view class='cuIcon-cu-image'>
					<image v-if="PageCur=='me'" src="../../static/tabBar/me_cur.png"></image>
					<image v-if="PageCur != 'me'" src="../../static/tabBar/me.png"></image>
				</view>
				<view :class="PageCur=='me'?'color_main':'text-gray'">个人中心</view>
			</view>
	
		</view>
	</view>
	
</view>
</template>

<script>
	export default {
		
	}
</script>

<style>

</style>