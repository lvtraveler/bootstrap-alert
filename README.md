<p>Demo:<a href="http://liumingmusic.github.io/Message">http://liumingmusic.github.io/Message</a></p>
<p>Bootstrap扩展提示对话框插件， alert、confirm、show三种</p>
<pre>
1、消息提示框
arrObject = {
    Msg: "content",           //显示给用户看的内容, 如：亲你的邮箱输入有误！
    iconImg: "info",          //提示的图标, （info 消息  question 问题 error 错误 warning 警告）
    title: "提示",             //提示标题,  header上面的内容
    isModal: true,            //模态状态开关  true false
    btnOk: "确定",             //确定按钮的默认文字
    btnCancel: "取消",         //取消按钮的默认文字
    isHideDate： 		     //设置自动消失的时间 只对 show弹框起作用
}
</pre>
Messager.alert(arrObject); //直接放进去即可 [上面只是说明使用的各个属性的配置] 实际使用如下：<br>
Messager.alert({title: '测试', Msg: 'alert测试', isModal: false})<br>
-------------------------------------------------------------------------------------------------------
2、确定提示框(用法基本和上面一样,只不过会有一个回调函数,判断用户点击的是确定还是取消)  使用如下：<br>
<pre>
Messager.confirm({title: 'test', Msg: '是否点击确定？', iconImg: 'question'}).on(function(flag){
    if(flag){
        点击确定按钮执行的操作
    }else{
        点击取消钮执执行的操作
    }
});
</pre>
-------------------------------------------------------------------------------------------------------
3、自动消失的弹出提示框  isHideDate设置时间  尽量加上 isModal: false 非模态方式<br>
<pre>
Messager.show({isModal: false, isHideDate: 2000});
</pre>
