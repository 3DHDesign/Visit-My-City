<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store, no-cache, must-revalidate');

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

require_once __DIR__ . '/PHPMailer/src/Exception.php';
require_once __DIR__ . '/PHPMailer/src/PHPMailer.php';
require_once __DIR__ . '/PHPMailer/src/SMTP.php';

/**
 * Return JSON response.
 */
function sendJsonResponse(
    bool $success,
    string $message,
    int $statusCode = 200
): void {
    http_response_code($statusCode);

    echo json_encode(
        [
            'success' => $success,
            'message' => $message,
        ],
        JSON_UNESCAPED_UNICODE |
        JSON_UNESCAPED_SLASHES
    );

    exit;
}

/*
|--------------------------------------------------------------------------
| Allow POST requests only
|--------------------------------------------------------------------------
*/

if (
    !isset($_SERVER['REQUEST_METHOD']) ||
    $_SERVER['REQUEST_METHOD'] !== 'POST'
) {
    sendJsonResponse(
        false,
        'Method not allowed.',
        405
    );
}

/*
|--------------------------------------------------------------------------
| Read request data
|--------------------------------------------------------------------------
*/

$rawInput = file_get_contents('php://input');

$data = json_decode(
    $rawInput ?: '',
    true
);

if (!is_array($data)) {
    $data = $_POST;
}

/*
|--------------------------------------------------------------------------
| Retrieve form values
|--------------------------------------------------------------------------
*/

$fullName = trim(
    (string) ($data['fullName'] ?? '')
);

$email = trim(
    (string) ($data['email'] ?? '')
);

$phone = trim(
    (string) ($data['phone'] ?? '')
);

$message = trim(
    (string) ($data['message'] ?? '')
);

/*
|--------------------------------------------------------------------------
| Remove line breaks from single-line fields
|--------------------------------------------------------------------------
*/

$fullName = preg_replace(
    '/[\r\n]+/',
    ' ',
    $fullName
) ?? '';

$email = preg_replace(
    '/[\r\n]+/',
    '',
    $email
) ?? '';

$phone = preg_replace(
    '/[\r\n]+/',
    ' ',
    $phone
) ?? '';

/*
|--------------------------------------------------------------------------
| Server-side validation
|--------------------------------------------------------------------------
*/

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

if (
    mb_strlen($fullName) < 3 ||
    mb_strlen($fullName) > 100
) {
    sendJsonResponse(
        false,
        'Please enter a valid full name.',
        422
    );
}

if (
    !preg_match(
        "/^[A-Za-zÀ-ÖØ-öø-ÿ.'\\-\\s]+$/u",
        $fullName
    )
) {
    sendJsonResponse(
        false,
        'Please enter a valid full name.',
        422
    );
}

if (
    mb_strlen($email) > 190 ||
    !filter_var($email, FILTER_VALIDATE_EMAIL)
) {
    sendJsonResponse(
        false,
        'Please enter a valid email address.',
        422
    );
}

if (
    !preg_match(
        '/^\+?[0-9\s\-()]{9,18}$/',
        $phone
    )
) {
    sendJsonResponse(
        false,
        'Please enter a valid phone number.',
        422
    );
}

$phoneDigits = preg_replace(
    '/\D/',
    '',
    $phone
) ?? '';

$phoneDigitCount = strlen($phoneDigits);

if (
    $phoneDigitCount < 9 ||
    $phoneDigitCount > 15
) {
    sendJsonResponse(
        false,
        'Phone number must contain 9 to 15 digits.',
        422
    );
}

$messageLength = mb_strlen($message);

if (
    $messageLength < 10 ||
    $messageLength > 1000
) {
    sendJsonResponse(
        false,
        'The message must contain between 10 and 1,000 characters.',
        422
    );
}

/*
|--------------------------------------------------------------------------
| Email configuration
|--------------------------------------------------------------------------
|
| SMTP account:
| pasindu@3dhdesign.com
|
| Inquiry recipients:
| pasindulaksara@gmail.com
| info@visitmycity.lk
|
| Thank-you email recipient:
| Customer email entered in the form
|
*/

$smtpUsername = 'pasindu@3dhdesign.com';

$smtpPassword = 'Hellopasi@123';

$adminEmail = 'pasindulaksara@gmail.com';

$vmcEmail = 'info@visitmycity.lk';

$senderName = 'Visit My City';

if (
    $smtpPassword === '' ||
    $smtpPassword === 'TYPE_EMAIL_PASSWORD_HERE'
) {
    sendJsonResponse(
        false,
        'SMTP password has not been configured.',
        500
    );
}

/*
|--------------------------------------------------------------------------
| Prepare safe HTML values
|--------------------------------------------------------------------------
*/

$safeName = htmlspecialchars(
    $fullName,
    ENT_QUOTES | ENT_SUBSTITUTE,
    'UTF-8'
);

$safeEmail = htmlspecialchars(
    $email,
    ENT_QUOTES | ENT_SUBSTITUTE,
    'UTF-8'
);

$safePhone = htmlspecialchars(
    $phone,
    ENT_QUOTES | ENT_SUBSTITUTE,
    'UTF-8'
);

$safeMessage = nl2br(
    htmlspecialchars(
        $message,
        ENT_QUOTES | ENT_SUBSTITUTE,
        'UTF-8'
    )
);

/*
|--------------------------------------------------------------------------
| Find VMC logo
|--------------------------------------------------------------------------
|
| Supported locations:
|
| public/images/logo.png
| public/images/logo.jpg
| public/images/logo.jpeg
| public/images/logo.webp
| public/images/logo.gif
|
*/

$logoPath = '';

$logoCandidates = glob(
    __DIR__ . '/images/logo.*'
);

if (is_array($logoCandidates)) {
    foreach ($logoCandidates as $candidate) {
        $extension = strtolower(
            pathinfo(
                $candidate,
                PATHINFO_EXTENSION
            )
        );

        if (
            in_array(
                $extension,
                [
                    'png',
                    'jpg',
                    'jpeg',
                    'webp',
                    'gif',
                ],
                true
            )
        ) {
            $logoPath = $candidate;
            break;
        }
    }
}

/*
|--------------------------------------------------------------------------
| Configure PHPMailer
|--------------------------------------------------------------------------
*/

try {
    $mail = new PHPMailer(true);

    $mail->isSMTP();

    $mail->Host = 'mail.3dhdesign.com';

    $mail->SMTPAuth = true;

    $mail->Username = $smtpUsername;

    $mail->Password = $smtpPassword;

    $mail->SMTPSecure =
        PHPMailer::ENCRYPTION_SMTPS;

    $mail->Port = 465;

    $mail->CharSet = 'UTF-8';

    $mail->Encoding = 'base64';

    $mail->Timeout = 30;

    $mail->SMTPDebug = SMTP::DEBUG_OFF;

    $mail->isHTML(true);

    /*
    |--------------------------------------------------------------------------
    | Sender
    |--------------------------------------------------------------------------
    */

    $mail->setFrom(
        $smtpUsername,
        $senderName
    );

    /*
    |--------------------------------------------------------------------------
    | Add VMC logo
    |--------------------------------------------------------------------------
    */

    $logoHtml = '
        <div
            style="
                margin:0 0 24px;
                color:#FFFFFF;
                font-family:Arial, Helvetica, sans-serif;
                font-size:24px;
                font-weight:700;
                line-height:1.2;
            "
        >
            Visit My City
        </div>
    ';

    if (
        $logoPath !== '' &&
        is_file($logoPath)
    ) {
        $mail->addEmbeddedImage(
            $logoPath,
            'vmc-logo',
            basename($logoPath)
        );

        $logoHtml = '
            <div style="margin:0 0 24px;">
                <img
                    src="cid:vmc-logo"
                    alt="Visit My City"
                    style="
                        display:block;
                        width:auto;
                        max-width:170px;
                        max-height:80px;
                        border:0;
                    "
                >
            </div>
        ';
    }

    /*
    |--------------------------------------------------------------------------
    | Email 1: Send customer inquiry to both recipients
    |--------------------------------------------------------------------------
    */

    $mail->addAddress(
        $adminEmail,
        'Pasindu Laksara'
    );

    $mail->addAddress(
        $vmcEmail,
        'Visit My City'
    );

    /*
     * When replying to the inquiry email,
     * the reply goes directly to the customer.
     */
    $mail->addReplyTo(
        $email,
        $fullName
    );

    $mail->Subject =
        'New Travel Inquiry from ' .
        $fullName;

    $mail->Body = '
        <!DOCTYPE html>

        <html lang="en">

        <head>
            <meta charset="UTF-8">

            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            >

            <title>New Travel Inquiry</title>
        </head>

        <body
            style="
                margin:0;
                padding:0;
                background:#F4F7FA;
                font-family:Arial, Helvetica, sans-serif;
                color:#0B1F33;
            "
        >
            <div style="padding:30px 15px;">

                <div
                    style="
                        max-width:650px;
                        margin:0 auto;
                        overflow:hidden;
                        border:1px solid #E8EDF2;
                        border-radius:18px;
                        background:#FFFFFF;
                    "
                >

                    <div
                        style="
                            padding:30px;
                            background:#0B1F33;
                        "
                    >
                        ' . $logoHtml . '

                        <div
                            style="
                                color:#E9A93B;
                                font-size:12px;
                                font-weight:700;
                                letter-spacing:2px;
                                text-transform:uppercase;
                            "
                        >
                            New Website Inquiry
                        </div>

                        <h1
                            style="
                                margin:10px 0 0;
                                color:#FFFFFF;
                                font-size:28px;
                                line-height:1.3;
                            "
                        >
                            New travel inquiry received
                        </h1>
                    </div>

                    <div style="padding:30px;">

                        <table
                            role="presentation"
                            style="
                                width:100%;
                                border-collapse:collapse;
                            "
                        >
                            <tr>
                                <td
                                    style="
                                        width:160px;
                                        padding:12px 0;
                                        color:#64748B;
                                        font-size:14px;
                                        font-weight:700;
                                        vertical-align:top;
                                    "
                                >
                                    Full Name
                                </td>

                                <td
                                    style="
                                        padding:12px 0;
                                        color:#0B1F33;
                                        font-size:14px;
                                        vertical-align:top;
                                    "
                                >
                                    ' . $safeName . '
                                </td>
                            </tr>

                            <tr>
                                <td
                                    style="
                                        padding:12px 0;
                                        color:#64748B;
                                        font-size:14px;
                                        font-weight:700;
                                        vertical-align:top;
                                    "
                                >
                                    Email Address
                                </td>

                                <td
                                    style="
                                        padding:12px 0;
                                        font-size:14px;
                                        vertical-align:top;
                                    "
                                >
                                    <a
                                        href="mailto:' . $safeEmail . '"
                                        style="
                                            color:#2D6A4F;
                                            text-decoration:none;
                                        "
                                    >
                                        ' . $safeEmail . '
                                    </a>
                                </td>
                            </tr>

                            <tr>
                                <td
                                    style="
                                        padding:12px 0;
                                        color:#64748B;
                                        font-size:14px;
                                        font-weight:700;
                                        vertical-align:top;
                                    "
                                >
                                    Phone / WhatsApp
                                </td>

                                <td
                                    style="
                                        padding:12px 0;
                                        color:#0B1F33;
                                        font-size:14px;
                                        vertical-align:top;
                                    "
                                >
                                    ' . $safePhone . '
                                </td>
                            </tr>
                        </table>

                        <div
                            style="
                                margin-top:20px;
                                padding:22px;
                                border:1px solid #E8EDF2;
                                border-radius:14px;
                                background:#F8FAFC;
                            "
                        >
                            <div
                                style="
                                    margin-bottom:10px;
                                    color:#64748B;
                                    font-size:12px;
                                    font-weight:700;
                                    letter-spacing:1px;
                                    text-transform:uppercase;
                                "
                            >
                                Travel Details
                            </div>

                            <div
                                style="
                                    color:#334155;
                                    font-size:15px;
                                    line-height:1.8;
                                "
                            >
                                ' . $safeMessage . '
                            </div>
                        </div>

                        <p
                            style="
                                margin:24px 0 0;
                                color:#64748B;
                                font-size:13px;
                                line-height:1.6;
                            "
                        >
                            Reply directly to this email to respond to
                            ' . $safeName . '.
                        </p>

                    </div>

                    <div
                        style="
                            padding:18px 30px;
                            background:#F8FAFC;
                            color:#94A3B8;
                            font-size:12px;
                            line-height:1.6;
                            text-align:center;
                        "
                    >
                        This inquiry was submitted through the
                        Visit My City website.
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
    | Email 2: Send thank-you email to customer
    |--------------------------------------------------------------------------
    */

    try {
        /*
         * Clear both previous recipients:
         *
         * pasindulaksara@gmail.com
         * info@visitmycity.lk
         */
        $mail->clearAddresses();

        $mail->clearCCs();

        $mail->clearBCCs();

        $mail->clearReplyTos();

        /*
         * Add only the customer email entered in the form.
         */
        $mail->addAddress(
            $email,
            $fullName
        );

        /*
         * If the customer replies to the confirmation email,
         * the reply goes to info@visitmycity.lk.
         */
        $mail->addReplyTo(
            $vmcEmail,
            'Visit My City'
        );

        $mail->Subject =
            'Thank you for contacting Visit My City';

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

            <body
                style="
                    margin:0;
                    padding:0;
                    background:#F4F7FA;
                    font-family:Arial, Helvetica, sans-serif;
                    color:#0B1F33;
                "
            >
                <div style="padding:30px 15px;">

                    <div
                        style="
                            max-width:650px;
                            margin:0 auto;
                            overflow:hidden;
                            border:1px solid #E8EDF2;
                            border-radius:18px;
                            background:#FFFFFF;
                        "
                    >

                        <div
                            style="
                                padding:30px;
                                background:#0B1F33;
                            "
                        >
                            ' . $logoHtml . '

                            <div
                                style="
                                    color:#E9A93B;
                                    font-size:12px;
                                    font-weight:700;
                                    letter-spacing:2px;
                                    text-transform:uppercase;
                                "
                            >
                                Inquiry Received
                            </div>

                            <h1
                                style="
                                    margin:10px 0 0;
                                    color:#FFFFFF;
                                    font-size:28px;
                                    line-height:1.3;
                                "
                            >
                                Thank you for contacting us
                            </h1>
                        </div>

                        <div
                            style="
                                padding:30px;
                                color:#334155;
                                font-size:15px;
                                line-height:1.8;
                            "
                        >
                            <p style="margin-top:0;">
                                Hi ' . $safeName . ',
                            </p>

                            <p>
                                Thank you for contacting Visit My City.
                                We have successfully received your
                                travel inquiry.
                            </p>

                            <p>
                                Our travel team will review your
                                requirements and get back to you soon.
                            </p>

                            <div
                                style="
                                    margin:25px 0;
                                    padding:20px;
                                    border-left:4px solid #E9A93B;
                                    border-radius:10px;
                                    background:#F8FAFC;
                                "
                            >
                                <strong style="color:#0B1F33;">
                                    Your message
                                </strong>

                                <div
                                    style="
                                        margin-top:10px;
                                        color:#64748B;
                                    "
                                >
                                    ' . $safeMessage . '
                                </div>
                            </div>

                            <p style="margin-bottom:0;">
                                Warm regards,<br>

                                <strong>
                                    Visit My City Team
                                </strong>
                            </p>
                        </div>

                        <div
                            style="
                                padding:20px 30px;
                                background:#F8FAFC;
                                color:#94A3B8;
                                font-size:12px;
                                line-height:1.6;
                                text-align:center;
                            "
                        >
                            This is an automatic confirmation email.
                            You can reply directly if you need to
                            provide more information.
                        </div>

                    </div>

                </div>
            </body>

            </html>
        ';

        $mail->AltBody =
            "Hi {$fullName},\n\n" .
            "Thank you for contacting Visit My City.\n\n" .
            "We have successfully received your travel inquiry. " .
            "Our travel team will review your requirements and " .
            "get back to you soon.\n\n" .
            "Warm regards,\n" .
            "Visit My City Team";

        $mail->send();
    } catch (Exception $confirmationException) {
        /*
         * The main inquiry was already delivered.
         * Log the confirmation email failure.
         */
        error_log(
            'VMC customer confirmation email error: ' .
            $confirmationException->getMessage()
        );
    }

    /*
    |--------------------------------------------------------------------------
    | Success response
    |--------------------------------------------------------------------------
    */

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