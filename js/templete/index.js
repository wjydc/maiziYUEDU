// 头部
var page = {
    index: function () {

        if ($('.no-index').length > 0) {
            $('.head-classify-nav').hide();
            $(".h-nav-first").hover(function () {
                $('.head-classify-nav').addClass('navShadow')
                $('.head-classify-nav').toggle();
                $('.head-classify-nav').hover(function () {
                    $(this).show()
                }, function () {
                    $(this).hide()
                })
            })
        } else {
            $('.head-classify-nav').show()
        }

        $('.h-nav li').hover(function () {
            $('.h-nav li').removeClass('activeNav')
            $(this).addClass('activeNav')
        }, function () {
            // $('.h-nav li').removeClass('activeNav')
        }
        )

        // $('.no-login').click(function(){
        //     $('.no-login-ways').toggle('500')
        // })
        $('.has-login').click(function () {
            $('.has-login-back').toggle('500')
        })


        $('.no-login').click(function () {
            $('.no-login-ways').show()
        })
        $('.no-login-ways .close').click(function () {
            $('.no-login-ways').hide()
        })


        // 手机版
        $('.MobilePhoneEdition').hover(function () {
            $('.toPhone').show()
        }, function () {
            $('.toPhone').hide()
        })
        $('.toPhone').hover(function () {
            $(this).show()
        }, function () {
            $(this).hide()
        })

        //zZ
        $('#headerPwd').keyup(function () {
            $("#HeaderLoginMsg").css('display', 'none');
        })
    },
    tabChange: function (fatherObj, sonObj) {
        fatherObj.find('.titleTab p').each(function (index, item) {
            var i = index;
            $(this).click(function () {
                sonObj.find('.goodBookList').hide()
                sonObj.find('.goodBookList').eq(i).show()

                sonObj.find('.latest-book').hide()
                sonObj.find('.latest-book').eq(i).show()

                sonObj.find('.bookList').hide()
                sonObj.find('.bookList').eq(i).show()
            })
        })
    },

    detail: {
        phone: function () {
            $('.phoneRead').click(function () {
                $('.phoneEnter').show()
            }),
            $('.phoneEnter').click(function () {
                $(this).hide()
            })
            $('.phoneRead').hover(function () {
                $('.phoneEnter').show()
            }),
            $('.phoneEnter').hover(function () {
                $(this).show()
            }, function () {
                $(this).hide()
            })


        },
        //  作品信息+作品目录+作品讨论区
        message: function () {
            $('.message').each(function (index, item) {
                var i = index;
                $(this).click(function () {
                    $('.production').hide();
                    $('.production').eq(i).show();
                })
            })
            $('.detailWrap .discuss').click(function(){
               document.getElementById('DISCUSS').scrollIntoView()
            })
        },
        // 弹窗
        mask: function () {
            $('.reward-left ul li').each(function (index, item) {
                // $('.gift .giveWord').val('捏一个饭团，羞羞塞到作者嘴里')
                $(this).click(function () {
                    var ifLogin = $('#ifLogin').attr("name")
                    if (ifLogin == "True") {
                        $('.spareMask').show()
                        $('.gift ul li img').removeClass('giftChoose').addClass('giftInit')
                        $('.gift ul li').eq(index).find('img').removeClass('giftInit').addClass('giftChoose')
                        $('.gift .giveWord').val($('.gift ul li').eq(index).data('text'))
                        var miliNum = $('.gift ul li').eq(index).data('count')
                        $('.giveNum i').text($('.giftnum').val() * miliNum)
                    }
                    else
                        $('.no-login-ways').show();
                })
            })
            //$('.reward-left ul li').click(function () {
            //    $('.spareMask').show()
            //})

            $('.close').click(function () {
                $('.spareMask').hide()
                $('.giftnum').val(1)
            })
            $('.sendGift').click(function () {
                // $('.spareMask').hide()
                // $('.giftnum').val(1)
            })

            $('.giveNum input').keyup(function () {
                var choose = $('.giftChoose').parent('li').data('count');
                var valu = $(this).val()
                $('.giveNum i').text(choose * valu)
            })

            $('.gift ul li').each(function (index, item) {
                $(this).click(function () {
                    $('.gift ul li img').removeClass('giftChoose').addClass('giftInit')
                    $(this).find('img').removeClass('giftInit').addClass('giftChoose')
                    $('.totalNum i').text($(this).data('count'))
                    $('.gift .giveWord').val($(this).data('text'))
                    $('.giftnum').val(1)
                })
            })

        }


    },
    templete: {
        init: function () {
        },
        tab: function () {
            $('.titleTab p').each(function (item, index) {
                var i = index;
                $(this).click(function () {
                    $(this).parent().find("p").removeClass('activeTab')
                    $(this).addClass('activeTab')
                })
            })

            $('.titleTab a').each(function (item, index) {
                var i = index;
                $(this).click(function () {
                    $(this).parent().find("a").removeClass('activeTab')
                    $(this).addClass('activeTab')
                })
            })

             $('.titleTab i').each(function (item, index) {
                var i = index;
                $(this).click(function () {
                    $(this).parent().find("i").removeClass('activeTab')
                    $(this).addClass('activeTab')
                })
            })


            $('.discuss').click(function () {
                $('.producct-Message').show()
                $('.product-Directory').hide()
            })

        },
        hoverColor: function (obj) {
            $(obj).hover(function () {
                $(obj).removeClass('NavActive').addClass('NavInit')
                $(this).removeClass('NavInit').addClass('NavActive')
            })
        },
        clickColor: function (obj) {
            // 
            obj.click(function () {
                obj.removeClass('NavActive').addClass('NavInit')
                $(this).removeClass('NavInit').addClass('NavActive')
            })
        },
        refresh: function () {
            $('.refresh').click(function () {
                $(this).find('img').addClass('rotate');
                setTimeout(function () {
                    remove()
                }, 1000);
            })
            function remove() {
                $('.refresh').find('img').removeClass('rotate');
            }

        },
        loginRegist: function (obj) {
            obj.find('.loregbtn span').each(function (index, item) {
                $(this).click(function () {
                    obj.find('.loregbtn span').removeClass('onclick').addClass('noclick')
                    $(this).removeClass('noclick').addClass('onclick')
                    obj.find('.inputBox').hide()
                    obj.find('.inputBox').eq(index).show()
                })
            })

            // $('.loregbtn span').each(function(index,item){
            //     $(this).click(function(){
            //         $('.loregbtn span').removeClass('onclick').addClass('noclick')
            //         $(this).removeClass('noclick').addClass('onclick')
            //         $('.inputBox').hide()
            //         $('.inputBox').eq(index).show()
            //     })
            // })
        }



    },
    reading: {
        toTop: function () {
            $(".toTop").click(function () {
                $(document).scrollTop(0);
            });
        }
    },


}
page.index()
page.tabChange($('.good-book'), $('.good-book .common-section-left'))
page.tabChange($('.chief-Editor'), $('.chief-Editor .common-section-left'))
page.tabChange($('.latest-update'), $('.latest-update'))
page.tabChange($('.freeChange'), $('.freeChange'))
// 注册登录
page.templete.loginRegist($('.head-wrap'))
page.templete.loginRegist($('.no-login-ways'))

page.templete.loginRegist($('.authorloginRe'))

page.templete.init()
page.templete.tab()
// 悬停变色
// page.templete.hoverColor('.rankingnav ul li a')
page.templete.hoverColor('.userCenter .asideBar li a')
// page.templete.hoverColor($('.asideBar ul li a'))
// 点击变色
page.templete.clickColor($('.asideBar ul li a'))
page.templete.clickColor($('.rankingnav ul li a'))

// page.templete.loginRegist()

page.templete.refresh()
page.detail.phone()
page.detail.message()
page.detail.mask()
page.reading.toTop()
// page.label.showHide()
// page.templete.booklist('.booklist-bottom li')




function show_time(endDate) {
    var time_start = new Date().getTime();
    var time_end = new Date(endDate).getTime();
    var time_distance = time_end - time_start;
    if (time_distance > 0) {
        var int_day = Math.floor(time_distance / 86400000)
        time_distance -= int_day * 86400000;
        var int_hour = Math.floor(time_distance / 3600000)
        time_distance -= int_hour * 3600000;
        var int_minute = Math.floor(time_distance / 60000)
        time_distance -= int_minute * 60000;
        var int_second = Math.floor(time_distance / 1000)
        if (int_day < 10) {
            int_day = "0" + int_day;
        }
        if (int_hour < 10) {
            int_hour = "0" + int_hour;
        }
        if (int_minute < 10) {
            int_minute = "0" + int_minute;
        }
        if (int_second < 10) {
            int_second = "0" + int_second;
        }
        $(".day").html(int_day);
        $(".hours").html(int_hour);
        $(".min").html(int_minute);
        $(".sec").html(int_second);
        setTimeout(function () {
            show_time(endDate)
        }, 1000);
    } else {
        $(".day").html('00');
        $(".hours").html('00');
        $(".min").html('00');
        $(".sec").html('00');
    }
}
// show_time()


function textmore(obj, num) {
    var _this = $(obj);
    var max = num;
    for (var i = 0; i < _this.length; i++) {
        var tempText = $.trim(_this.eq(i).text()).replace(" ", "");
        if (tempText.length > max) {
            _this.eq(i).text(tempText.substring(0, max))
            _this.eq(i).html(_this.eq(i).html() + '...')
        } else {
            _this.eq(i).html(tempText)
        }
    }
}
// textmore();


function areaWord(maxNum, ele) {
    ele.keyup(function () {
        var num = $(this).val().length;
        var text = $(this).val()
        if (num > maxNum) {
            console.log(text)
            var newText = text.substring(0, maxNum);
            $(this).val(newText)
            $(this).siblings('i').find('em').html(maxNum)

        } else {

            $(this).siblings('i').find('em').html(num)
        }
    })

}


//zZ 提示框
function showExchange(title, message, callback) {
    var _body = $('body');
    var _html = '<div class="showExchange"><div class="signInMask"></div><div class="signInWrap"><p class="signIntitle">' + title + '</p><div class="signInContent"><p>' + message;
    _html += '</div><a class="signKnow" href="#">确定</a></p></div></div>';

    function sign() {
        _body.append(_html);

    }
    sign()

    function signHide() {
        $(document).on('click', '.signKnow', function () {
            $(this).parent().parent().remove();
            if (typeof callback === 'function') {
                callback()
            }
        })
    }
    signHide()
}
//zZ 头部登录
function headerLogin() {
    var user = $("#headerUserName").val();
    var pwd = $("#headerPwd").val();

    if (user == null || user == undefined || user == "") return;
    if (pwd == null || pwd == undefined || pwd == "") return;

    $.ajax({
        url: "/data/GetData.aspx",
        type: "post",
        data: { Module: "Include_Header", Action: "Login", User: user, Pwd: pwd },
        success: function (data) {
            if (data != "success") {
                $("#HeaderLoginMsg").html("<span></span>账号或密码错误");
                $("#HeaderLoginMsg").css('display', 'block');
            }
            else {
                parent.location.reload();
            }
        }
    });
}
//zZ 游览图片
function getFileUrl(sourceId) {
    var url;
    if (navigator.userAgent.indexOf("MSIE") >= 1) { // IE 
        url = document.getElementById(sourceId).value;
    } else if (navigator.userAgent.indexOf("Firefox") > 0) { // Firefox 
        url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
    } else if (navigator.userAgent.indexOf("Chrome") > 0) { // Chrome 
        url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
    }
    return url;
}
function preImg(sourceId, targetId) {
    var url = getFileUrl(sourceId);
    var imgPre = document.getElementById(targetId);
    imgPre.src = url;
}


// 购买全本  章节弹窗
// 购买全本  章节弹窗
function buyBook(ChapterWordSizeFee, FeeName, title, bookName, ChapterName, type, cost, balance, payment, callback, s, t, r, ChapterCode, NovelId) {
    var _html = '';
    var _p = '';

    if (title == '订购全本') {
        _html = $('<div class="buyBook"><div class="buyMask"></div><div class="buyWrap"><div class="title"><span>' + title + '</span><img class="close" src="../../Content/img/index/read-button-close.png" alt=""></div><p>' + bookName + ' - <span>' + type + '</span></p> <p>本次订阅将消耗<span class="money">' + cost + '</span>' + FeeName + '</p><p>当前余额为' + balance + '' + FeeName + '，确认购买后将扣除本次消费</p><a class="buyBtn" href="/Data/GetData.aspx?Fee=' + cost + '&Module=Book_Detail&Action=AddNovelOrder&NovelId=' + NovelId + '">确定购买</a></div></div>');
        _p = $('<p class="tips">提示：全本价格由作者定价，已购买全本不会重复购买。</p>')
    }
    else if (title == '订购章节') {
        _html = $('<div class="buyBook"><div class="buyMask"></div><div class="buyWrap"><div class="title"><span>' + title + '</span><img class="close" src="../../Content/img/index/read-button-close.png" alt=""></div><p>' + bookName + ' - <span>' + ChapterName + '</span></p> <p>本次订阅将消耗<span class="money">' + cost + '</span>' + FeeName + '</p><p>当前余额为' + balance + FeeName + '，确认购买后将扣除本次消费</p><a class="buyBtn" href="/User/Order/Chapter.aspx?Status=1&s=' + s + '&t=' + t + '&r=' + r + '&NovelId=' + NovelId + '&ChapterCode=' + ChapterCode + '">确定购买</a></div></div>');
        _p = $('<p class="tips">提示：订阅价格每千字<span class="money">' + ChapterWordSizeFee + '</span>' + FeeName + '，已购买章节不会重复购买。</p>');
    }
    else if (title == '订购全本余额不足') {
        _html = $('<div class="buyBook"><div class="buyMask"></div><div class="buyWrap"><div class="title"><span>' + title + '</span><img class="close" src="../../Content/img/index/read-button-close.png" alt=""></div><p>' + bookName + ' - <span>' + type + '</span></p> <p>本次订阅将消耗<span class="money">' + cost + '</span>' + FeeName + '</p><p>当前余额为' + balance + FeeName + '，还需支付<span class="money">' + payment + '</span>' + FeeName + '</p><a class="buyBtn" href="/User/Order/Recharge.aspx">余额不足，请充值</a></div></div>');
        _p = $('<p class="tips">提示：全本价格由作者定价，已购买全本不会重复购买。</p>')
    }
    else {
        _html = $('<div class="buyBook"><div class="buyMask"></div><div class="buyWrap"><div class="title"><span>' + title + '</span><img class="close" src="../../Content/img/index/read-button-close.png" alt=""></div><p>' + bookName + ' - <span>' + ChapterName + '</span></p> <p>本次订阅将消耗<span class="money">' + cost + '</span>' + FeeName + '</p><p>当前余额为' + balance + FeeName + '，还需支付<span class="money">' + payment + '</span>' + FeeName + '</p><a class="buyBtn" href="/User/Order/Recharge.aspx">余额不足，请充值</a></div></div>');
        _p = $('<p class="tips">提示：订阅价格每千字<span class="money">' + ChapterWordSizeFee + '</span>' + FeeName + '，已购买章节不会重复购买。</p>');
    }

    _html.find('.buyWrap').append(_p).end().appendTo('body')

    $('.buyBook .close').click(function () {
        $('.buyBook').hide()
    })

    $(document).on('click', '.buyBtn', function () {
        if (typeof callback == 'function') {
            callback()
        }
    })

}










