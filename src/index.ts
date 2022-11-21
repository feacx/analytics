/**
 * @description 初始化项目
 */
 export class Validator {
  private mobile;
  constructor(mobile: string) {
    this.mobile = mobile;
  }

  notification(): void {
    console.log('您初始化的手机号码是：', this.mobile);
  }
};
