$(function ($) {

    $("button[class*=btn-primary]:eq(0)").bind("click", msg.alertTest1);
    $("button[class*=btn-primary]:eq(1)").bind("click", msg.alertTest2);
    $("button[class*=btn-primary]:eq(2)").bind("click", msg.alertTest3);
    $("button[class*=btn-primary]:eq(3)").bind("click", msg.alertTest4);

    $("button[class*=btn-success]").bind("click", msg.confirmTest);
    $("button[class*=btn-info]").bind("click", msg.showTest);
});

var msg = {
    alertTest1: function () {
        Messager.alert({title: '测试', Msg: 'aler提示框', isModal: false})
    },
    alertTest2: function () {
        Messager.alert({title: '测试', Msg: 'aler提示框', isModal: true})
    },
    alertTest3: function () {
        Messager.alert({title: '测试', Msg: 'aler提示框', isModal: true}).on(function (flag) {
            alert("回调函数");
        });
    },
    alertTest4: function () {
        Messager.alert({title: '测试', Msg: 'aler提示框', isModal: true, iconImg: 'warning'})
    },
    confirmTest: function () {
        Messager.confirm({title: 'test', Msg: '点击确定与否', iconImg: 'question'}).on(function (flag) {
            if (flag) {
                alert(flag);
            }
            else {
                alert(flag);
            }
        });
    },
    showTest: function () {
        Messager.show({Msg: "我会自动消失的哦", isModal: true, isHideDate: 3000});
    }
};