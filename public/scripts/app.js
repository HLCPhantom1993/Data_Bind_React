"use strict";

var counter = 0;

/* 定义add函数, +1操作通过renderApp()函数实现 */
var add = function add() {
    counter++;
    console.log("After adding 1, counter is: " + counter);
    /* 通过renderApp函数实现页面的加1效果 */
    renderApp();
};

var minus = function minus() {
    counter--;
    console.log("After subtracting 1, counter is: " + counter);
    renderApp();
};

/* 得到需要操作的DOM元素 */
var appRoot = document.getElementById('app');

/* 定义renderApp()函数, 它将声明一个模版标记需要更新的DOM元素
 * 并通过ReactDOM产生UI效果 
 */
var renderApp = function renderApp() {
    /* 声明模版标记需要更新数据的DOM元素和事件 */
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h2",
            null,
            "Sum and Subtraction"
        ),
        React.createElement(
            "p",
            null,
            "Counter: ",
            counter
        ),
        React.createElement(
            "button",
            { onClick: add },
            "Add+"
        ),
        React.createElement(
            "button",
            { onClick: minus },
            "Minus-"
        )
    );

    /* 设置好DOM元素后将结果产生到对应元素 */
    ReactDOM.render(template, appRoot);
};

/* 函数的驱动 */
renderApp();
