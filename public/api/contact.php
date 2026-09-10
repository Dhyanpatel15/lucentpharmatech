<?php
// Lucent Pharmatech - Drop Us A Line Contact Form Mailer (PHP / cPanel)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit();
}

$input = json_decode(file_get_contents('php://input'), true);

$name    = isset($input['name']) ? trim(strip_tags($input['name'])) : '';
$email   = isset($input['email']) ? trim(filter_var($input['email'], FILTER_SANITIZE_EMAIL)) : '';
$phone   = isset($input['phone']) ? trim(strip_tags($input['phone'])) : 'Not provided';
$subject = isset($input['subject']) ? trim(strip_tags($input['subject'])) : '';
$message = isset($input['message']) ? trim(strip_tags($input['message'])) : 'No message provided';

if (empty($name) || empty($email) || empty($subject)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Please fill in all required fields."]);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid email address format."]);
    exit();
}

$to = "panchalshravand@gmail.com, shravanog01@gmail.com";
$email_subject = "[Web Inquiry] " . $subject . " - from " . $name;

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: Lucent Pharmatech Website <panchalshravand@gmail.com>\r\n";
$headers .= "Reply-To: " . $name . " <" . $email . ">\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$body = "
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7fd; margin: 0; padding: 20px; color: #1d2864; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
    .header { background: linear-gradient(135deg, #083f8e, #24b7d3); color: #ffffff; padding: 30px 24px; text-align: center; }
    .header h1 { margin: 0 0 6px; font-size: 24px; }
    .header p { margin: 0; font-size: 14px; opacity: 0.9; }
    .content { padding: 28px 24px; }
    .field-group { margin-bottom: 20px; }
    .label { font-size: 12px; font-weight: 700; text-transform: uppercase; color: #6f7886; margin-bottom: 4px; }
    .value { font-size: 16px; color: #1a202c; background: #f8fafc; padding: 12px 16px; border-radius: 6px; border: 1px solid #edf2f7; }
    .message-box { font-size: 15px; color: #1a202c; background: #f8fafc; padding: 16px; border-radius: 8px; border-left: 4px solid #24b7d3; white-space: pre-wrap; }
    .footer { background: #f1f5f9; padding: 16px 24px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class=\"container\">
    <div class=\"header\">
      <h1>New Consultancy Request</h1>
      <p>Lucent Pharmatech Website Contact Form</p>
    </div>
    <div class=\"content\">
      <div class=\"field-group\">
        <div class=\"label\">Full Name</div>
        <div class=\"value\"><strong>" . htmlspecialchars($name) . "</strong></div>
      </div>
      <div class=\"field-group\">
        <div class=\"label\">Email Address</div>
        <div class=\"value\"><a href=\"mailto:" . htmlspecialchars($email) . "\">" . htmlspecialchars($email) . "</a></div>
      </div>
      <div class=\"field-group\">
        <div class=\"label\">Phone Number</div>
        <div class=\"value\">" . htmlspecialchars($phone) . "</div>
      </div>
      <div class=\"field-group\">
        <div class=\"label\">Subject</div>
        <div class=\"value\">" . htmlspecialchars($subject) . "</div>
      </div>
      <div class=\"field-group\">
        <div class=\"label\">Client Message</div>
        <div class=\"message-box\">" . nl2br(htmlspecialchars($message)) . "</div>
      </div>
    </div>
    <div class=\"footer\">
      <p>Delivered to <strong>panchalshravand@gmail.com</strong> &amp; <strong>shravanog01@gmail.com</strong></p>
    </div>
  </div>
</body>
</html>
";

if (mail($to, $email_subject, $body, $headers)) {
    http_response_code(200);
    echo json_encode(["success" => true, "message" => "Message sent successfully to panchalshravand@gmail.com and shravanog01@gmail.com"]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Failed to send email. Please check server mail settings."]);
}
