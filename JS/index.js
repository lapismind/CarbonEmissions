$(document).ready(function() {
    // 监听select元素的change事件
    $('#tops').change(function() {
        // 获取所选选项的值
        var topValue = $('#tops').val();
        // 根据选项值设置图片路径
        var imgSrc = 'Animate/transparent.png';
        switch (topValue) {
            case '1':
                imgSrc = 'Animate/tops/polo衫.png';
                break;
            case '2':
                imgSrc = 'Animate/tops/polo衫.png';
                break;    
            case '3':
                imgSrc = 'Animate/tops/T恤.png';
                break;
            case '4':
                imgSrc = 'Animate/tops/T恤.png';
                break;
            case '5':
                imgSrc = 'Animate/tops/衬衣.png';
                break;
            case '6':
                imgSrc = 'Animate/tops/衬衣.png';
                break;
            case '7':
                imgSrc = 'Animate/tops/衬衣.png';
                break;
            case '8':
                imgSrc = 'Animate/tops/衬衣.png';
                break;            
            case '9':
                imgSrc = 'Animate/tops/卫衣.png';
                break;
            case '10':
                imgSrc = 'Animate/tops/卫衣.png';
                break;
            case '11':
                imgSrc = 'Animate/tops/卫衣.png';
                break;
            case '12':
                imgSrc = 'Animate/tops/卫衣.png';
                break;
            case '13':
                imgSrc = 'Animate/tops/毛衣.png';
                break;
        }

        resetDresses();

        $(".chara .clothes-tops img").fadeOut(200, function() {
            $(this).attr("src", imgSrc).fadeIn(200);
        });
    });

    $('#bottoms').change(function() {
        // 获取所选选项的值
        var bottomValue = $('#bottoms').val();
        // 根据选项值设置图片路径
        var imgSrc = 'Animate/transparent.png';
        switch (bottomValue) {
            case '1':
                imgSrc = 'Animate/bottoms/西装下裤.png';
                break;
            case '2': 
                imgSrc = 'Animate/bottoms/西装下裤.png';
                break;    
            case '3':
                imgSrc = 'Animate/bottoms/打底裤.png';
                break;
            case '4':
                imgSrc = 'Animate/bottoms/打底裤.png';
                break;
            case '5':    
                imgSrc = 'Animate/bottoms/打底裤.png';
                break;    
            case '6':
                imgSrc = 'Animate/bottoms/牛仔裤.png';
                break;
            case '7':
                imgSrc = 'Animate/bottoms/运动长裤.png';
                break;
            case '8':
                imgSrc = 'Animate/bottoms/运动长裤.png';
                break;
            case '9':
                imgSrc = 'Animate/bottoms/运动长裤.png';
                break;
            case '10':
                imgSrc = 'Animate/bottoms/运动短裤.png';
                break;
            case '11':
                imgSrc = 'Animate/bottoms/运动短裤.png';
                break;
            case '12':
                imgSrc = 'Animate/bottoms/牛仔短裤.png';
                break;
            case '13':
                imgSrc = 'Animate/bottoms/短裙.png';
                break;    
            case '14':
                imgSrc = 'Animate/bottoms/短裙.png';
                break;
            case '15':
                imgSrc = 'Animate/bottoms/短裙.png';
                break;
            case '16':
                imgSrc = 'Animate/bottoms/短裙.png';
                break;
            case '17':
                imgSrc = 'Animate/bottoms/半身裙.png';
                break;
            case '18':
                imgSrc = 'Animate/bottoms/半身裙.png';
                break;
            case '19':
                imgSrc = 'Animate/bottoms/半身裙.png';
                break;
            case '20':
                imgSrc = 'Animate/bottoms/半身裙.png';
                break;
            case '21':
                imgSrc = 'Animate/bottoms/吊带裙.png';
                break;
            case '22':
                imgSrc = 'Animate/bottoms/吊带裙.png';
                break;
        }

        resetDresses();

        $(".chara .clothes-bottoms img").fadeOut(200, function() {
            $(this).attr("src", imgSrc).fadeIn(200);
        });
    });

    $('#outerwears').change(function() {
        // 获取所选选项的值
        var outerwearValue = $('#outerwears').val();
        // 根据选项值设置图片路径
        var imgSrc = 'Animate/transparent.png';
        switch (outerwearValue) {
            case '1':
                imgSrc = 'Animate/outerwears/夹克.png';
                break;
            case '2':
                imgSrc = 'Animate/outerwears/夹克.png';
                break;
            case '3':
                imgSrc = 'Animate/outerwears/夹克.png';
                break;
            case '4':
                imgSrc = 'Animate/outerwears/夹克.png';
                break;
            case '5':
                imgSrc = 'Animate/outerwears/夹克.png';
                break;
            case '6':
                imgSrc = 'Animate/outerwears/西装外套.png';
                break;
            case '7':
                imgSrc = 'Animate/outerwears/西装外套.png';
                break;
            case '8':
                imgSrc = 'Animate/outerwears/西装外套.png';
                break;
            case '9':
                imgSrc = 'Animate/outerwears/西装外套.png';
                break;
            case '10':
                imgSrc = 'Animate/outerwears/羽绒服.png';
                break;
            case '11':
                imgSrc = 'Animate/outerwears/羽绒服.png';
                break;
            case '12':
                imgSrc = 'Animate/outerwears/运动外套.png';
                break;
            case '13':
                imgSrc = 'Animate/outerwears/运动外套.png';
                break;
            case '14':
                imgSrc = 'Animate/outerwears/白色棉服.png';
                break;
            case '15':
                imgSrc = 'Animate/outerwears/彩色棉服.png';
                break;
            case '16':
                imgSrc = 'Animate/outerwears/风衣.png';
                break;
            case '17':
                imgSrc = 'Animate/outerwears/卫衣外套.png';
                break;
            case '18':
                imgSrc = 'Animate/outerwears/卫衣外套.png';
                break;    
        }

        resetDresses();

        $(".chara .clothes-outerwears img").fadeOut(200, function() {
            $(this).attr("src", imgSrc).fadeIn(200);
        });
    });

    $('#dresses').change(function() {
        // 获取所选选项的值
        var dressValue = $('#dresses').val();
        // 根据选项值设置图片路径
        var imgSrc = 'Animate/transparent.png';
        switch (dressValue) {
            case '1':
                imgSrc = 'Animate/dresses/丝绸长裙.png';
                break;
            case '2':
                imgSrc = 'Animate/dresses/棉质长裙.png';
                break;
            case '3':
                imgSrc = 'Animate/dresses/涤纶长裙.png';
                break;
        }; 

        resetTBO();
        
        $(".chara .clothes-dresses img").fadeOut(200, function() {
            $(this).attr("src", imgSrc).fadeIn(200);
        });
    });

    var currentCharacter = "Animate/female.png";

    $("#gender-btn").click(function() {
        // 切换图片路径
        if (currentCharacter === "Animate/female.png") {
            currentCharacter = "Animate/male.png";
            $("#gender-btn").text("不对不对 我是女生！");
        } else {
            currentCharacter = "Animate/female.png";
            $("#gender-btn").text("不对不对 我是男生！");
        }

        // 更新角色图片
        $("#character").fadeOut(200,function(){
            $(this).attr("src", currentCharacter).fadeIn(200);
        });
        
        // 重置衣服
        resetTBO();
        resetDresses();
    });

    function resetTBO() {
        $("#tops, #bottoms, #outerwears").val("0");
    
        $(".chara .clothes-tops img, .chara .clothes-bottoms img, .chara .clothes-outerwears img").fadeOut(200, function() {
            $(this).attr("src", "Animate/transparent.png").fadeIn(200);
        });
    }
    
    function resetDresses() {
        $("#dresses").val("0");
    
        $(".chara .clothes-dresses img").fadeOut(200, function() {
            $(this).attr("src", "Animate/transparent.png").fadeIn(200);
        });
    }
});

