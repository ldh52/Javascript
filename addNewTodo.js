const toDoList = document.querySelector('#to-do-list');

function addNewTodo(text) {
  const li = document.createElement("li");
  li.textContent = text;
  toDoList.append(li);
}

// 테스트 코드
addNewTodo('자바스크립트 공부하기');
addNewTodo('고양이 화장실 청소하기');
addNewTodo('고양이 장난감 쇼핑하기');



/*
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>오늘 할 일</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="main">
    <h2 class="title">오늘 할 일</h2>
    <ul id="to-do-list"></ul>
  </div>
  <script src="index.js"></script>
</body>
</html>
*/


/*
body {
  margin: 0;
  padding: 0;
	display: flex;
	align-items: center;
	justify-content: center;
}

.main {
	width: 350px;
	margin: 40px;
  padding: 30px 0;
  background-color: #fcfcfc;
  box-shadow: -5px -5px 20px #FFFFFF,  5px 5px 20px #BABECC;
  border-radius: 8px;
  text-align: center;
}

.title {
	margin: 15px auto;
	font-size: 30px;
	font-weight: 600;
	color: #9600ff;
}

#to-do-list {
  width: 280px;
	margin: 0 auto 15px;
	padding: 0;
	list-style: none;
}

#to-do-list li {
	display: flex;
	align-items: center;
	justify-content: center;
  width: 90%;
  height: 40px;
	margin: 8px auto 15px;
	border-bottom: 1px solid #9600ff;
}
*/
