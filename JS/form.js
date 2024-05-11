$(document).ready(function() {
    var contents = [
        "今天的碳排放还没计算完,还不可以休息哦。",
        "等空闲的时候，我们一起去种树吧！为“碳达峰”“碳中和”贡献一份自己的力量！",
        "一起学习低碳知识吧！？",
        "你知道什么是“碳达峰” 和“碳中和”吗？"
    ];

    var lastContent = "";

    $('[data-toggle="popover"]').popover();

    $('#gif').on('click', function() {
        $(this).attr('src', $(this).attr('src'));
        var randomContent = "";
        do {
            var randomIndex = Math.floor(Math.random() * contents.length);
            randomContent = contents[randomIndex];
        } while (randomContent === lastContent);

        $('[data-toggle="popover"]').attr('data-content', randomContent).popover('show');
        
        setTimeout(function() {
            $('[data-toggle="popover"]').popover('hide');
        }, 5000);
        
        lastContent = randomContent;
    });
});
