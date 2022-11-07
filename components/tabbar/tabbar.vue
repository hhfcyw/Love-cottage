<template>
	<view class="">
		<view class="box">
			<view class="tabbar">
				<view class="action" @click="NavChange" data-cur="home">
					<view class='icon-image'>
						<image v-if="PageCur=='home'" src="../../static/tabBar/index_cur.png"></image>
						<image v-if="PageCur != 'home'" src="../../static/tabBar/index.png"></image>
					</view>
					<view :class="PageCur=='home'?'color_main':'text-gray'">首页</view>
				</view>

				<view @click="NavChange" class="action" data-cur="love">
					<image class="logo_btn" mode="widthFix" src="../../static/logo.png"></image>
					<view :class="PageCur=='love'?'color_main':'text-gray'">爱的言语</view>
				</view>

				<view class="action" @click="NavChange" data-cur="me">
					<view class='icon-image'>
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
		data() {
			return {
				
			}
		},
		props:{
			PageCur:String
		},
		methods:{
			NavChange(e){
				this.$emit('updatePageCur',e.currentTarget.dataset.cur)
			},
		}

	}
</script>

<style lang="scss">
	* {
		margin: 0;
		padding: 0;
	}

	.box {
		position: fixed;
		bottom: 0;
		background-color: #ffffff;
		width: 100%;
		box-shadow: 0 -1px 3px 0;
		padding-bottom: 5px
	}

	.tabbar {
		display: flex;
		align-items: center;
	}

	.icon-image image {
		width: 25px;
		height: 25px;
	}

	.text-gray{
		text-align: center;
		color: #888888;	
	}
	
	.color_main{
		text-align: center;
		color: black;
	}

	.action {
		font-size: 11px;
		position: relative;
		flex: 1;
		text-align: center;
		padding: 0;
		display: block;
		height: auto;
		line-height: 1;
		margin: 0;
		background-color: inherit;
		overflow: initial;
	}
	
	.action:nth-child(2){
		padding-top: 25px;
	}


	.logo_btn {
		width: 38*2rpx;
		height: 38*2rpx;
		position: absolute;
		z-index: 2;
		border-radius: 50%;
		top: -40rpx;
		left: 0rpx;
		right: 0;
		margin: auto;
		padding: 0;
	}
</style>
