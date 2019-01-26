let counter = 0; 

/* 定义add函数, +1操作通过renderApp()函数实现 */
const add = () => {
    counter++; 
    console.log("After adding 1, counter is: " + counter); 
    /* 通过renderApp函数实现页面的加1效果 */ 
    renderApp(); 
}

const minus = () => {
    counter--; 
    console.log("After subtracting 1, counter is: " + counter); 
    renderApp(); 
}

/* 得到需要操作的DOM元素 */ 
const appRoot = document.getElementById('app'); 

/* 定义renderApp()函数, 它将声明一个模版标记需要更新的DOM元素
 * 并通过ReactDOM产生UI效果 
 */
const renderApp = () => {
    /* 声明模版标记需要更新数据的DOM元素和事件 */ 
    const template = (
        <div>
            <h2>Sum and Subtraction</h2>
            <p>Counter: {counter}</p>
            <button onClick={add}>Add+</button>
            <button onClick={minus}>Minus-</button>
        </div>
    );

    /* 设置好DOM元素后将结果产生到对应元素 */ 
    ReactDOM.render(template, appRoot); 
} 

/* 函数的驱动 */
renderApp(); 