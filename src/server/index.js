const path = require('path');
//const JS_PATH = path.join(__dirname, './main.js');
const JS_PATH = '/static/client.js';
console.log(JS_PATH);
export const indexHTML = (JS_PATH) => `
<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Учет сотрудников</title>
  <!--<script src="./main.js"></script> -->
  <!--<link rel="stylesheet" href="bootstrap.min.css">-->
  <!--<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    -->
  <!--<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">-->
  <!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>-->
  <!--<script src="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>
    -->
  <!--<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>-->
  <!-- CSS only -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
  <link rel="stylesheet" href="/static/style.css">
  <!-- JavaScript Bundle with Popper shift alt f -->
  <!--<script>
    function changeDropdownCaption(item) {
      document.getElementById('dropdown03').innerText = item.innerText;
    }
  </script>-->
<script defer src="/static/client.js"></script></head>

<body>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03"
        aria-controls="navbarsExample03" aria-expanded="false">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample03">
        <ul class="navbar-nav me-auto mb-2 mb-sm-0">
          <span class="navbar-text">Фильтр по должности:</span>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="dropdown03" data-bs-toggle="dropdown"
              aria-expanded="false">Все123</a>
            <ul class="dropdown-menu" aria-labelledby="dropdown03">
              <li><a class="dropdown-item" href="#" onclick="changeDropdownCaption(this)">Все</a></li>
              <li><a class="dropdown-item" href="#" onclick="changeDropdownCaption(this)">Директор</a></li>
              <li><a class="dropdown-item" href="#" onclick="changeDropdownCaption(this)">Юрист</a></li>
              <li><a class="dropdown-item" href="#" onclick="changeDropdownCaption(this)">Руководитель</a>
              </li>
              <li><a class="dropdown-item" href="#" onclick="changeDropdownCaption(this)">Контролер</a></li>
              <li><a class="dropdown-item" href="#" onclick="changeDropdownCaption(this)">Ст. Рабочий</a></li>
              <li><a class="dropdown-item" href="#" onclick="changeDropdownCaption(this)">Рабочий</a></li>
            </ul>
          </li>
          <span class="navbar-text">Фильтр по отделу:</span>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle fw" href="#" id="dropdown03" data-bs-toggle="dropdown"
              aria-expanded="false">Все</a>
            <ul class="dropdown-menu" aria-labelledby="dropdown03">
              <li><a class="dropdown-item" href="#" onclick="changeDropdownCaption(this)">Все</a></li>
              <li><a class="dropdown-item" href="#" onclick="changeDropdownCaption(this)">Нет</a></li>
              <li><a class="dropdown-item" href="#" onclick="changeDropdownCaption(this)">ОТК</a></li> 
              <li><a class="dropdown-item" href="#" onclick="changeDropdownCaption(this)">КО</a></li> 
              <li><a class="dropdown-item" href="#" onclick="changeDropdownCaption(this)">ОА</a></li> 
              <li><a class="dropdown-item" href="#" onclick="changeDropdownCaption(this)">ПЦ</a></li> 
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
      </div>
      <form role="search">
        <input class="form-control" type="search" placeholder="Search" aria-label="Search">
      </form>
    </div>
    </div>
  </nav>


  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
    crossorigin="anonymous"></script>
</body>

</html>
`