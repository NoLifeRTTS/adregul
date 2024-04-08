<?php

if (
    isset($_POST['name'], $_POST['email'], $_POST['phone']) && $_POST['name'] !== "" && $_POST['email'] !== "" && $_POST['phone'] !== ""
) {
    $to = 'refund@adregul.com';
    $subject = 'Письмо с формы обратной связи';
    $message = '
                <html>
                    <head>
                        <title>' . $subject . '</title>
                    </head>
                    <body style="background: #f00; padding: 10px">
                        <p style="font-size: 10px;">Name: <b style="color: #fff;">' . $_POST['name'] . '</b></p>
                        <p style="font-size: 10px;">Phone: <b style="color: #fff;">' . $_POST['phone'] . '</b></p>
                        <p style="font-size: 10px;">Email: <b style="color: #fff;">' . $_POST['email'] . '</b></p>
                    </body>
                </html>';
    $headers = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "Обратная связь";

    $sending = mail($to, $subject, $message, $headers);

    if (!mkdir('feedback') && !is_dir('feedback')) {
        throw new \RuntimeException(sprintf('Directory "%s" was not created', 'feedback'));
    }

    $file = 'feedback/feedback-logs.txt';
    file_put_contents($file, "\n" . "\n" . date('l jS \of F Y h:i:s A'), FILE_APPEND);
    if ($sending) {
        file_put_contents($file, "\n" . $message, FILE_APPEND);
    } else {
        file_put_contents($file, "\n" . 'Error. Email in not sent.', FILE_APPEND);
    }
}

