<?php
// Simple PHP mail version - fallback if PHPMailer doesn't work
// Only allow POST requests
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    http_response_code(405);
    die(json_encode(['success' => false, 'message' => 'Method not allowed']));
}

// Set content type
header('Content-Type: application/json');

// Get form data
$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$subject = trim($_POST['subject'] ?? '');
$message = trim($_POST['message'] ?? '');

// Basic validation
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    die(json_encode(['success' => false, 'message' => 'Vyplňte všetky povinné polia (meno, email, správa).']));
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    die(json_encode(['success' => false, 'message' => 'Neplatný email formát.']));
}

// Prepare email content
$to = 'cerevka@strechacentrum.sk';
$email_subject = 'Nová správa z formulára strechacentrum.sk' . ($subject ? ' - ' . $subject : '');

// Create email body
$email_body = "Nová správa z kontaktného formulára\n\n";
$email_body .= "Meno: $name\n";
$email_body .= "Email: $email\n";
if (!empty($phone)) $email_body .= "Telefón: $phone\n";
if (!empty($subject)) $email_body .= "Predmet: $subject\n";
$email_body .= "Správa: $message\n\n";
$email_body .= "Čas odoslania: " . date('d.m.Y H:i:s') . "\n";
$email_body .= "Odoslané cez: strechacentrum.sk";

// Email headers
$headers = array(
    'From' => 'web@strechacentrum.sk',
    'Reply-To' => $email,
    'X-Mailer' => 'PHP/' . phpversion(),
    'Content-Type' => 'text/plain; charset=UTF-8'
);

// Convert headers array to string
$header_string = '';
foreach ($headers as $key => $value) {
    $header_string .= "$key: $value\r\n";
}

// Try to send email
if (mail($to, $email_subject, $email_body, $header_string)) {
    echo json_encode([
        'success' => true, 
        'message' => 'Správa bola úspešne odoslaná. Ďakujeme za kontakt!'
    ]);
} else {
    error_log("Mail sending failed for: $name <$email>");
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'Nepodarilo sa odoslať správu. Skúste to prosím neskôr alebo nás kontaktujte telefonicky na +421 902 120 001.'
    ]);
}
?>