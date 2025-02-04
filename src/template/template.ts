export function EmailHtmlTemplate(
  name: FormDataEntryValue | string | null,
  email: FormDataEntryValue | string | null,
  phone_number: FormDataEntryValue | string | null,
  work_area: FormDataEntryValue | string | null
): string {
  const htmlTemplate = `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
          }
          .container {
            background: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            margin: auto;
          }
          h1 {
            color: #333;
          }
          p, a {
            font-size: 16px;
            color: #555;
          }
          
        </style>
      </head>
      <body>
        <div class="container">
          <h1>New user wants to book a visit!</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <a href="tel:${phone_number}"><strong>Phone:</strong> ${phone_number}</a>
          <p><strong>Work Area:</strong> ${work_area}</p>
        </div>
      </body>
    </html>
  `;

  return htmlTemplate;
}
