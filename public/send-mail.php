<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

require_once __DIR__ . '/PHPMailer/src/Exception.php';
require_once __DIR__ . '/PHPMailer/src/PHPMailer.php';
require_once __DIR__ . '/PHPMailer/src/SMTP.php';

function sendJsonResponse(
    bool $success,
    string $message,
    int $statusCode = 200
): void {
    http_response_code($statusCode);

    echo json_encode([
        'success' => $success,
        'message' => $message,
    ]);

    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendJsonResponse(false, 'Method not allowed.', 405);
}

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput ?: '', true);

if (!is_array($data)) {
    $data = $_POST;
}

$fullName = trim((string) ($data['fullName'] ?? ''));
$email = trim((string) ($data['email'] ?? ''));
$phone = trim((string) ($data['phone'] ?? ''));
$message = trim((string) ($data['message'] ?? ''));

// Remove unexpected line breaks from single-line fields
$fullName = preg_replace('/[\r\n]+/', ' ', $fullName) ?? '';
$email = preg_replace('/[\r\n]+/', '', $email) ?? '';
$phone = preg_replace('/[\r\n]+/', ' ', $phone) ?? '';

if (
    $fullName === '' ||
    $email === '' ||
    $phone === '' ||
    $message === ''
) {
    sendJsonResponse(
        false,
        'Please complete all required fields.',
        422
    );
}

if (mb_strlen($fullName) < 3 || mb_strlen($fullName) > 100) {
    sendJsonResponse(false, 'Please enter a valid full name.', 422);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    sendJsonResponse(false, 'Please enter a valid email address.', 422);
}

if (!preg_match('/^\+?[0-9\s\-()]{9,18}$/', $phone)) {
    sendJsonResponse(false, 'Please enter a valid phone number.', 422);
}

$phoneDigitCount = strlen(preg_replace('/\D/', '', $phone));

if ($phoneDigitCount < 9 || $phoneDigitCount > 15) {
    sendJsonResponse(false, 'Please enter a valid phone number.', 422);
}

if (mb_strlen($message) < 10 || mb_strlen($message) > 1000) {
    sendJsonResponse(
        false,
        'The message must contain between 10 and 1,000 characters.',
        422
    );
}

/*
|--------------------------------------------------------------------------
| SMTP configuration
|--------------------------------------------------------------------------
|
| Add the real email password only on the cPanel/server version.
| Do not push the real password to GitHub.
|
*/

$smtpUsername = 'pasindu@3dhdesign.com';
$smtpPassword = 'Hellopasi@123';

$adminEmail = 'pasindu@3dhdesign.com';
$senderName = 'Visit My City';

if ($smtpPassword === 'TYPE_EMAIL_PASSWORD_HERE') {
    sendJsonResponse(
        false,
        'SMTP password has not been configured.',
        500
    );
}

$safeName = htmlspecialchars($fullName, ENT_QUOTES, 'UTF-8');
$safeEmail = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$safePhone = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
$safeMessage = nl2br(
    htmlspecialchars($message, ENT_QUOTES, 'UTF-8')
);

/*
|--------------------------------------------------------------------------
| Find the VMC logo
|--------------------------------------------------------------------------
|
| This automatically finds logo.png, logo.jpg, logo.webp, etc.
|
*/

$logoPath = '';

$logoCandidates = glob(__DIR__ . '/images/logo.*');

if (is_array($logoCandidates)) {
    foreach ($logoCandidates as $candidate) {
        $extension = strtolower(
            pathinfo($candidate, PATHINFO_EXTENSION)
        );

        if (
            in_array(
                $extension,
                ['png', 'jpg', 'jpeg', 'gif', 'webp'],
                true
            )
        ) {
            $logoPath = $candidate;
            break;
        }
    }
}

try {
    $mail = new PHPMailer(true);

    // SMTP settings
    $mail->isSMTP();
    $mail->Host = 'mail.3dhdesign.com';
    $mail->SMTPAuth = true;
    $mail->Username = $smtpUsername;
    $mail->Password = $smtpPassword;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;

    $mail->CharSet = 'UTF-8';
    $mail->Encoding = 'base64';
    $mail->Timeout = 30;

    // Keep disabled in production
    $mail->SMTPDebug = SMTP::DEBUG_OFF;

    $mail->setFrom($smtpUsername, $senderName);

    $logoHtml = '
        <div style="
            font-size:22px;
            font-weight:700;
            color:#0B1F33;
            margin-bottom:20px;
        ">
            Visit My City
        </div>
    ';

    if ($logoPath !== '' && file_exists($logoPath)) {
        $mail->addEmbeddedImage(
            $logoPath,
            'vmc-logo',
            basename($logoPath)
        );

        $logoHtml = '
            <div style="margin-bottom:24px;">
                <img
                    src="cid:vmc-logo"
                    alt="Visit My City"
                    style="
                        display:block;
                        width:auto;
                        max-width:170px;
                        max-height:80px;
                    "
                >
            </div>
        ';
    }

    /*
    |--------------------------------------------------------------------------
    | Email 1: Send inquiry to admin
    |--------------------------------------------------------------------------
    */

    $mail->addAddress($adminEmail, 'Visit My City');
    $mail->addReplyTo($email, $fullName);

    $mail->isHTML(true);
    $mail->Subject = 'New Travel Inquiry from ' . $fullName;

    $mail->Body = '
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>New Travel Inquiry</title>
        </head>

        <body style="
            margin:0;
            padding:0;
            background:#F4F7FA;
            font-family:Arial, Helvetica, sans-serif;
            color:#0B1F33;
        ">
            <div style="padding:30px 15px;">
                <div style="
                    max-width:650px;
                    margin:0 auto;
                    overflow:hidden;
                    border-radius:18px;
                    background:#FFFFFF;
                    border:1px solid #E8EDF2;
                ">
                    <div style="
                        padding:30px;
                        background:#0B1F33;
                    ">
                        ' . $logoHtml . '

                        <div style="
                            color:#E9A93B;
                            font-size:12px;
                            font-weight:700;
                            letter-spacing:2px;
                            text-transform:uppercase;
                        ">
                            New Website Inquiry
                        </div>

                        <h1 style="
                            margin:10px 0 0;
                            color:#FFFFFF;
                            font-size:28px;
                            line-height:1.3;
                        ">
                            New travel inquiry received
                        </h1>
                    </div>

                    <div style="padding:30px;">
                        <table style="
                            width:100%;
                            border-collapse:collapse;
                        ">
                            <tr>
                                <td style="
                                    padding:12px 0;
                                    width:160px;
                                    color:#64748B;
                                    font-weight:700;
                                    vertical-align:top;
                                ">
                                    Full Name
                                </td>

                                <td style="
                                    padding:12px 0;
                                    color:#0B1F33;
                                ">
                                    ' . $safeName . '
                                </td>
                            </tr>

                            <tr>
                                <td style="
                                    padding:12px 0;
                                    color:#64748B;
                                    font-weight:700;
                                    vertical-align:top;
                                ">
                                    Email
                                </td>

                                <td style="padding:12px 0;">
                                    <a
                                        href="mailto:' . $safeEmail . '"
                                        style="color:#2D6A4F;"
                                    >
                                        ' . $safeEmail . '
                                    </a>
                                </td>
                            </tr>

                            <tr>
                                <td style="
                                    padding:12px 0;
                                    color:#64748B;
                                    font-weight:700;
                                    vertical-align:top;
                                ">
                                    Phone / WhatsApp
                                </td>

                                <td style="
                                    padding:12px 0;
                                    color:#0B1F33;
                                ">
                                    ' . $safePhone . '
                                </td>
                            </tr>
                        </table>

                        <div style="
                            margin-top:20px;
                            padding:22px;
                            border-radius:14px;
                            background:#F8FAFC;
                            border:1px solid #E8EDF2;
                        ">
                            <div style="
                                margin-bottom:10px;
                                color:#64748B;
                                font-size:12px;
                                font-weight:700;
                                letter-spacing:1px;
                                text-transform:uppercase;
                            ">
                                Travel Details
                            </div>

                            <div style="
                                color:#334155;
                                font-size:15px;
                                line-height:1.8;
                            ">
                                ' . $safeMessage . '
                            </div>
                        </div>

                        <p style="
                            margin:24px 0 0;
                            color:#64748B;
                            font-size:13px;
                            line-height:1.6;
                        ">
                            Reply directly to this email to respond to
                            ' . $safeName . '.
                        </p>
                    </div>
                </div>
            </div>
        </body>
        </html>
    ';

    $mail->AltBody =
        "New Travel Inquiry\n\n" .
        "Full Name: {$fullName}\n" .
        "Email: {$email}\n" .
        "Phone / WhatsApp: {$phone}\n\n" .
        "Travel Details:\n{$message}";

    $mail->send();

    /*
    |--------------------------------------------------------------------------
    | Email 2: Send confirmation to the customer
    |--------------------------------------------------------------------------
    */

    try {
        $mail->clearAddresses();
        $mail->clearReplyTos();

        $mail->addAddress($email, $fullName);
        $mail->addReplyTo($adminEmail, 'Visit My City');

        $mail->Subject = 'Thank you for contacting Visit My City';

        $mail->Body = '
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                >
                <title>Thank You</title>
            </head>

            <body style="
                margin:0;
                padding:0;
                background:#F4F7FA;
                font-family:Arial, Helvetica, sans-serif;
                color:#0B1F33;
            ">
                <div style="padding:30px 15px;">
                    <div style="
                        max-width:650px;
                        margin:0 auto;
                        overflow:hidden;
                        border-radius:18px;
                        background:#FFFFFF;
                        border:1px solid #E8EDF2;
                    ">
                        <div style="
                            padding:30px;
                            background:#0B1F33;
                        ">
                            ' . $logoHtml . '

                            <div style="
                                color:#E9A93B;
                                font-size:12px;
                                font-weight:700;
                                letter-spacing:2px;
                                text-transform:uppercase;
                            ">
                                Inquiry Received
                            </div>

                            <h1 style="
                                margin:10px 0 0;
                                color:#FFFFFF;
                                font-size:28px;
                                line-height:1.3;
                            ">
                                Thank you for contacting us
                            </h1>
                        </div>

                        <div style="
                            padding:30px;
                            color:#334155;
                            font-size:15px;
                            line-height:1.8;
                        ">
                            <p style="margin-top:0;">
                                Hi ' . $safeName . ',
                            </p>

                            <p>
                                Thank you for contacting Visit My City.
                                We have successfully received your travel
                                inquiry.
                            </p>

                            <p>
                                Our travel team will review your requirements
                                and get back to you soon.
                            </p>

                            <div style="
                                margin:25px 0;
                                padding:20px;
                                border-left:4px solid #E9A93B;
                                border-radius:10px;
                                background:#F8FAFC;
                            ">
                                <strong style="color:#0B1F33;">
                                    Your message
                                </strong>

                                <div style="
                                    margin-top:10px;
                                    color:#64748B;
                                ">
                                    ' . $safeMessage . '
                                </div>
                            </div>

                            <p style="margin-bottom:0;">
                                Warm regards,<br>
                                <strong>Visit My City Team</strong>
                            </p>
                        </div>

                        <div style="
                            padding:20px 30px;
                            background:#F8FAFC;
                            color:#94A3B8;
                            font-size:12px;
                            line-height:1.6;
                            text-align:center;
                        ">
                            This is an automatic confirmation email.
                            You can reply directly if you need to add
                            more information.
                        </div>
                    </div>
                </div>
            </body>
            </html>
        ';

        $mail->AltBody =
            "Hi {$fullName},\n\n" .
            "Thank you for contacting Visit My City.\n" .
            "We have received your travel inquiry, and our team " .
            "will get back to you soon.\n\n" .
            "Warm regards,\n" .
            "Visit My City Team";

        $mail->send();
    } catch (Exception $confirmationException) {
        // The admin already received the inquiry.
        // Do not show an error to the website visitor.
        error_log(
            'VMC confirmation email error: ' .
            $confirmationException->getMessage()
        );
    }

    sendJsonResponse(
        true,
        'Thank you! Your inquiry has been sent successfully. We will get back to you soon.'
    );
} catch (Exception $exception) {
    error_log(
        'VMC contact form error: ' .
        $exception->getMessage()
    );

    sendJsonResponse(
        false,
        'We could not send your inquiry right now. Please try again shortly.',
        500
    );
}