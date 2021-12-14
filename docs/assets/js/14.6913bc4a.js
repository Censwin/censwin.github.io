(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{526:function(s,t,a){"use strict";a.r(t);var n=a(6),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("首先需要明确一点，js是运行在渲染进程的主线程里，这个主线程非常繁忙，需要处理DOM、计算样式、计算布局，同时还要处理js任务及各种输入事件。这就需要一个系统来统筹调度这些任务 "),a("strong",[s._v("【消息队列和事件循环系统】")])]),s._v(" "),a("p",[s._v("先上代码")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("MainThread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" num1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//任务1")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" num2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//任务2")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" num3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//任务3")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"最终计算的值为:%d,%d,%d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("num1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("num2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("num3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("； "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//任务4")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("如果我们按顺序执行上述代码将会是：开始线程->任务1->任务2->任务3->线程退出，但我们实际执行时并不是所有任务都是执行前就全部安排好的，大多数情况下，新任务都是在线程运行过程中产生的，如果我们加入新任务按照上面的写法显然不行。")]),s._v(" "),a("p",[s._v("为了在运行过程中能接受并执行新任务，我们需要采用"),a("strong",[s._v("事件循环机制")]),s._v(" 。我们可以通过一个for循环监听是否有新任务，如下：")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//GetInput")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//等待用户从键盘输入一个数字，并返回该输入的数字")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetInput")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" input_number "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    cout"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"请输入一个数:"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    cin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v("input_number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" input_number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//主线程(Main Thread)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("MainThread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" first_num "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetInput")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("；\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" second_num "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetInput")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("；\n          result_num "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" first_num "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" second_num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"最终计算的值为:%d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("result_num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("；\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("ul",[a("li",[s._v("第一点引入了循环机制，具体实现方式是在线程语句最后添加了一个 for 循环语句，线程会一直循环执行。")]),s._v(" "),a("li",[s._v("第二点是引入了事件，可以在线程运行过程中，等待用户输入的数字，等待过程中线程处于暂停状态，一旦接收到用户输入的信息，那么线程会被激活，然后执行相加运算，最后输出结果。")])]),s._v(" "),a("h4",{attrs:{id:"处理其他线程发送过来的任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#处理其他线程发送过来的任务"}},[s._v("#")]),s._v(" 处理其他线程发送过来的任务")]),s._v(" "),a("p",[s._v("上面我们引入了事件循环机制，可以在执行过程中接收新任务。但所有任务都来自线程内部。渲染主线程会频繁接收到来自于 IO 线程的一些任务，比如DOM解析或者点击事件等。")]),s._v(" "),a("p",[s._v("如何才能接收到其他线程发送的消息呢？")]),s._v(" "),a("p",[s._v("一个通用模式是使用消息队列，消息队列是用来实现事件循环的线程模型。"),a("img",{attrs:{src:s.$withBase("/brower/mess.png")}})]),s._v(" "),a("p",[s._v("从图中可以看出，消息队列是一种数据结构，可以存放要执行的任务。它符合队列“先进先出”的特点，也就是说要添加任务的话，添加到队列的尾部；要取出任务的话，从队列头部去取。")]),s._v(" "),a("p",[s._v("第三版线程模型：队列 + 循环 "),a("img",{attrs:{src:s.$withBase("/brower/duiliejincheng.png")}})]),s._v(" "),a("p",[s._v("从图中可以看出，渲染进程专门有一个 IO 线程用来接收其他进程传进来的消息，接收到消息之后，会将这些消息组装成任务发送给渲染主线程，"),a("u",[s._v("所以消息队列是存在渲染主线程的。 子线程直接将事件加入消息队列 其它进程通过io线程将事件加入消息队列。")])]),s._v(" "),a("h4",{attrs:{id:"消息队列中的任务类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消息队列中的任务类型"}},[s._v("#")]),s._v(" 消息队列中的任务类型")]),s._v(" "),a("p",[s._v("内部消息类型，如输入事件（鼠标滚动、点击、移动）、微任务、文件读写、WebSocket、JavaScript 定时器等等。除此之外，消息队列中还包含了很多与页面相关的事件，如 JavaScript 执行、解析 DOM、样式计算、布局计算、CSS 动画等。")]),s._v(" "),a("p",[s._v("以上这些事件都是在主线程中执行的，所以在编写 Web 应用时，你还需要衡量这些事件所占用的时长，并想办法解决单个任务占用主线程过久的问题。")]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"单线程的缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单线程的缺点"}},[s._v("#")]),s._v(" 单线程的缺点")]),s._v(" "),a("p",[s._v("页面所有任务都来自于消息队列，而消息队列遵循先进先出的要求；也就是说放入队列的任务需要等待前面的任务完成才会被执行，鉴于这个属性，就有如下两个问题需要解决。")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("如何处理高优先级任务？")]),s._v(" "),a("p",[s._v("比如一个典型的场景是监控 DOM 节点的变化情况（节点的插入、修改、删除等动态变化），然后根据这些变化来处理相应的业务逻辑。一个通用的设计的是，利用 JavaScript 设计一套监听接口，当变化发生时，渲染引擎同步调用这些接口，这是一个典型的观察者模式。不过这个模式有个问题，因为 DOM 变化非常频繁，如果每次发生变化的时候，都直接调用相应的 JavaScript 接口，那么这个当前的任务执行时间会被拉长，从而导致执行效率的下降。")]),s._v(" "),a("p",[a("strong",[s._v("那该如何权衡效率和实时性呢？")]),s._v(" 针对这种情况，微任务就应用而生了，下面我们来看看微任务是如何权衡效率和实时性的。")]),s._v(" "),a("p",[s._v("通常我们把消息队列中的任务称为"),a("strong",[s._v("宏任务")]),s._v("，每个宏任务中都包含了一个"),a("strong",[s._v("微任务队列")]),s._v("，在执行宏任务的过程中，如果 DOM 有变化，那么就会将该变化添加到微任务列表中，这样就不会影响到宏任务的继续执行，因此也就解决了执行效率的问题。")]),s._v(" "),a("p",[s._v("等宏任务中的主要功能都直接完成之后，这时候，渲染引擎并不着急去执行下一个宏任务，而是执行当前宏任务中的微任务，因为 DOM 变化的事件都保存在这些微任务队列中，这样也就解决了实时性问题。")])]),s._v(" "),a("li",[a("p",[s._v("如何解决单个任务执行时长过久问题？")]),s._v(" "),a("p",[s._v("因为所有的任务都是在单线程中执行的，所以每次只能执行一个任务，而其他任务就都处于等待状态。如果其中一个任务执行时间过久，那么下一个任务就要等待很长时间。")])])]),s._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("p",[s._v("每个宏任务都有一个微任务列表，在宏任务的执行过程中产生微任务会被添加到改列表中，等宏任务快执行结束之后，会执行微认为列表，所以微任务依然运行在当前宏任务的执行环境中，这个特性会导致宏任务和微任务有一些本质上的区别。")]),s._v(" "),a("p",[a("strong",[s._v("浏览器是基于多进程+多线程架构的，主要有IO线程，用开负责和其它进程IPC通信的，然后主线程主要跑页面的，V8就是在主线程上执行的而javascript需要V8去运行，所以我们说JavaScript是单线程执行的。还有其它很多辅助线程，比如预解析DOM的线程，垃圾回收也有一些辅助线程")])])])}),[],!1,null,null,null);t.default=r.exports}}]);