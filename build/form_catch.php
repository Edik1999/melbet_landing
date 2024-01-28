<?php
/*
 * Файл обработчик формы
 * Приходит POST запрос с параметрами:
 * username - имя пользователя, валидируем его что не содержит спецсимволы и цифры
 * email - валидируем что это email
 * phone - валидируем по паттерну ^[0-9]+[0-9]*$
 *
 * Если валидация не прошла, то возвращаем ошибку
 * Если валидация прошла, то отправляем данные на email tester@gmail.com
 */

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];

    // Проверка на валидность имени пользователя по паттерну ^[A-zА-яЁё]+$ (только буквы и пробелы)
    if (!preg_match("/^[A-zА-яЁё]+$/", $username)) {
        echo json_encode(["error" => "Некорректное имя пользователя"]);
        exit();
    }

    // Проверка на валидность email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["error" => "Некорректный email"]);
        exit();
    }

    // Проверка на валидность номера телефона
    if (!empty($phone) && !preg_match("/^[0-9]+[0-9]*$/", $phone)) {
        echo json_encode(["error" => "Некорректный номер телефона"]);
        exit();
    }

    $to = "veniaminranalysis@gmail.com";
    $subject = "Новый пользователь";
    if (!empty($phone)) {
        $message = "Имя пользователя: {$username}\nEmail: {$email}\nТелефон: {$phone}";
    } else {
        $message = "Имя пользователя: {$username}\nEmail: {$email}. Телефон не указан";
    }

    $headers = "From: veniaminranalysis@gmail.com\r\n";
    $headers .= "Content-type: text/plain; charset=UTF-8\r\n";

    $result = mail($to, $subject, $message, $headers);

    echo json_encode(["success" => "Данные успешно отправлены", 'result' => json_encode($result)]);
} else {
    echo json_encode(["error" => "Недопустимый метод запроса"]);
}





