<?php

$recepient = "snegnyibars54@mail.ru";
$sitename = "Клуб УШУ в Новосибирске 'Снежный Барс'";

$theme = trim($_POST["theme_form"]);
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = "Тема заявки: $theme \nИмя: $name \nТелефон: $phone";

$pagetitle = "Заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
