<template>

	<el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false"
		:on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
		<img v-if="imageUrl" :src="imageUrl" class="avatar">
		<i v-else class="el-icon-plus avatar-uploader-icon"></i>
	</el-upload>

</template>

<script>
	export default {
		name: "Upload",
		data() {
			return {
				imageUrl: ''
			};
		},
		methods: {
			handleAvatarSuccess(res, file) {
				this.imageUrl = URL.createObjectURL(file.raw);
			},
			beforeAvatarUpload(file) {
				const isPNG = file.type === 'image/png';
				const isLt2M = file.size / 1024 / 1024 < 20;

				if (!isPNG) {
					this.$message.error('上传头像图片只能是 PNG 格式!');
				}
				if (!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 20MB!');
				}
				return isPNG && isLt2M;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}

	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}

	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}

	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}
</style>
