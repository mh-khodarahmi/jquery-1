$("div:nth-of-type(odd)").css({
    width: "100%",
    height: "100px",
    backgroundColor: "lightblue"
})
$("div:nth-of-type(even)").css({
    width: "100%",
    height: "100px",
    backgroundColor: "grey"
})
$("div>p").click(function () {
    $(this).css({
        backgroundColor: "red"
    })
})