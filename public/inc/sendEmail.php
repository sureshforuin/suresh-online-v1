<?php
$to_email = 'sureshforuin@gmail.com'; // Replace with your email address
$subject = 'Contact Form Submission';
$email_header = 'From:info@suresh-online.netify.com'. "\r\n" .
    'Reply-To: sureshforuin@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

$contactName = $_POST['contactName'];
$contactEmail = $_POST['contactEmail'];
$contactSubject = $_POST['contactSubject'];
$contactMessage = $_POST['contactMessage'];
$contactName = htmlspecialchars($contactName);
$contactEmail = htmlspecialchars($contactEmail);
$contactSubject = htmlspecialchars($contactSubject);
$contactMessage = htmlspecialchars($contactMessage);

$message =  <<<EOT
Hi Suresh,
A new message has been sent from your website. 
Details are as follows:

Name: $contactName
Email: $contactEmail
Subject: $contactSubject
Message: $contactMessage

Thanks, 
Suresh Online
EOT;

if(mail($to_email, $subject, $message, $email_header)) {
    echo "OK";
} else {
    echo "Message failed to send.";
}

?>