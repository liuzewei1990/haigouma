<template>
<div class="member-header-box">
	<div class="member-header-hd">
		<div class="avatar-img">
			<img src="~/assets/img/user/default_user_header.png">
		</div>
		<div class="member-msg">
			<div class="member-name">欢迎YDW135RBLO9952</div>
			<div class="member-grade">
				<span>注册会员</span>
			</div>
		</div>
	</div>
	<div class="member-header-right">
		<a href="" class="member-set"></a>
		<a href="" class="member-message"></a>
	</div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .member-header-box {
    background: url(~/assets/img/user/member-top-bg.png) center bottom no-repeat;
    background-size: cover;
    height: 130px;
    position: relative;

    .member-header-hd {
      position: absolute;
      top: 50%;
      width: 100%;
      transform: translateY(-50%);
      color: #fff;
      min-height: 56px;
      z-index: 1;
      display: flex;

      .avatar-img {
        margin-left: 15px;
        height: 58px;
        width: 58px;
        box-sizing: border-box;
        border-radius: 100%;
        overflow: hidden;
        border: 2px solid rgba(255,255,255,.4);
      }

      .member-grade span {
          position: relative;
          display: inline-block;
          margin-right: 3px;
          padding: 0 10px;
          height: 15px;
          line-height: 13px;
          vertical-align: middle;
          border-radius: 15px;
          font-size: 10px;
          color: #fff;
          background-color: rgba(180,50,27,.3);
          max-width: 100%;
          box-sizing: border-box;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          border: 1px solid #fff;
          margin-top: 0.3rem;
      }

      .member-name {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: #fff;
          margin: .3rem auto 0;
          font-size: 0.8rem;
      }

      .avatar-img img {
        display: block;
        height: 54px;
        width: 54px;
      }

      .member-msg {
        margin-left: 0.5rem;
      }
    }

    .member-header-right {
      position: absolute;
      top: 10px;
      right: 15px;

      .member-set {
        display: inline-block;
        height: 20px;
        width: 20px;
        background: url(~/assets/img/user/member_set_icon.png);
        background-size: 20px;
      }
      .member-message {
        display: inline-block;
        height: 22px;
        width: 22px;
        background: url(~/assets/img/user/message_icon.png);
        background-size: 22px;
        margin-left: 0.7rem;
      }
    }
  }
</style>
